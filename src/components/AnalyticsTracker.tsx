'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AnalyticsTracker() {
    const pathname = usePathname();

    useEffect(() => {
        if (pathname?.startsWith('/admin')) return;

        let cleanupTracker: (() => void) | null = null;

        const startTracking = () => {
            const consent = localStorage.getItem('atomus_cookie_consent');
            if (consent !== 'true') return false;

            const userAgent = window.navigator.userAgent;
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
            const device = isMobile ? 'mobile' : 'desktop';

            fetch('/api/analytics', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ eventType: 'pageview', path: pathname, device })
            }).catch(() => { });

            const startTime = Date.now();
            const sendTimeOnPage = () => {
                const duration = Math.round((Date.now() - startTime) / 1000);
                if (duration > 0) {
                    const data = JSON.stringify({ eventType: 'time_on_page', path: pathname, device, duration });
                    if (navigator.sendBeacon) {
                        navigator.sendBeacon('/api/analytics', data);
                    } else {
                        fetch('/api/analytics', { method: 'POST', keepalive: true, body: data }).catch(() => { });
                    }
                }
            };

            window.addEventListener('beforeunload', sendTimeOnPage);
            cleanupTracker = () => {
                sendTimeOnPage();
                window.removeEventListener('beforeunload', sendTimeOnPage);
            };

            return true;
        };

        const isTracking = startTracking();

        const handleConsent = () => {
            if (!cleanupTracker) {
                startTracking();
            }
        };

        window.addEventListener('cookie_consent_accepted', handleConsent);

        return () => {
            window.removeEventListener('cookie_consent_accepted', handleConsent);
            if (cleanupTracker) cleanupTracker();
        };
    }, [pathname]);

    return null;
}

'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AnalyticsTracker() {
    const pathname = usePathname();

    useEffect(() => {
        if (pathname?.startsWith('/admin')) return;

        const consent = localStorage.getItem('atomus_cookie_consent');
        if (consent !== 'true') return;

        const userAgent = window.navigator.userAgent;
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        const device = isMobile ? 'mobile' : 'desktop';

        // 1. Send pageview
        fetch('/api/analytics', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ eventType: 'pageview', path: pathname, device })
        }).catch(() => { });

        // 2. Track time spent
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

        return () => {
            sendTimeOnPage();
            window.removeEventListener('beforeunload', sendTimeOnPage);
        };
    }, [pathname]);

    return null;
}

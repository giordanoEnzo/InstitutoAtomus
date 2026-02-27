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

            const handleGlobalClick = (e: MouseEvent) => {
                const target = e.target as HTMLElement;
                if (!target || !target.closest) return;

                const clickable = target.closest('button, a, [role="button"]');
                if (clickable) {
                    const _id = clickable.id || '';
                    let _text = clickable.textContent || '';
                    _text = _text.substring(0, 50).trim();

                    let url = '';
                    if (clickable.tagName.toLowerCase() === 'a') {
                        url = (clickable as HTMLAnchorElement).href || '';
                    }

                    fetch('/api/analytics', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            eventType: 'click',
                            path: window.location.pathname,
                            elementId: _id || _text || 'unknown_element',
                            source: url,
                            device
                        })
                    }).catch(() => { });
                }
            };

            window.addEventListener('click', handleGlobalClick);

            cleanupTracker = () => {
                sendTimeOnPage();
                window.removeEventListener('beforeunload', sendTimeOnPage);
                window.removeEventListener('click', handleGlobalClick);
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

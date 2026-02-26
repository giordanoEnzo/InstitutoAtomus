'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
    const [accepted, setAccepted] = useState(true);

    useEffect(() => {
        const consent = localStorage.getItem('atomus_cookie_consent');
        if (!consent) {
            setAccepted(false);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('atomus_cookie_consent', 'true');
        setAccepted(true);
        window.dispatchEvent(new Event('cookie_consent_accepted'));
    };

    if (accepted) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: 'var(--bg-primary)',
            boxShadow: '0 -5px 20px rgba(0,0,0,0.15)',
            zIndex: 9999,
            borderTop: '3px solid var(--brand-gold)'
        }}>
            <div className="container" style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '2rem',
                flexWrap: 'wrap'
            }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <p style={{ margin: 0, color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                        <strong style={{ color: 'var(--text-secondary)' }}>Aviso de Privacidade:</strong> A ATOMUS utiliza cookies analíticos e sensores de tráfego corporativo. O acesso à nossa estrutura e a continuidade da sua leitura exigem o posterior consentimento com estes termos de monitoramento.
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', flex: '0 0 auto' }}>
                    <Link href="/privacidade" onClick={() => { }} className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.8rem' }}>
                        LER OS TERMOS
                    </Link>
                    <button onClick={handleAccept} className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.8rem' }}>
                        ACEITAR E CONTINUAR
                    </button>
                </div>
            </div>
        </div>
    );
}

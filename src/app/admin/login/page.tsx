'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [form, setForm] = useState({
        username: '',
        password: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Erro ao autenticar');
            }

            router.push('/admin');
            router.refresh();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            display: 'flex',
            minHeight: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0a0a0a',
            backgroundImage: 'radial-gradient(circle at 50% 0%, #1a1a1a 0%, #0a0a0a 100%)',
            padding: '1rem'
        }}>
            <div style={{
                backgroundColor: '#111',
                padding: '3rem',
                borderRadius: '16px',
                width: '100%',
                maxWidth: '420px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                border: '1px solid #222'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <img src="/logo.png" alt="ATOMUS Logo" style={{ height: '64px', marginBottom: '1.5rem', margin: '0 auto', filter: 'drop-shadow(0 0 10px rgba(220,180,90,0.2))' }} />
                    <h1 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: '500', margin: 0 }}>
                        Bem-vindo de volta
                    </h1>
                    <p style={{ color: 'var(--brand-gold)', fontSize: '0.9rem', marginTop: '0.5rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                        Acesso Restrito
                    </p>
                </div>

                {error && (
                    <div style={{
                        backgroundColor: 'rgba(255, 60, 60, 0.1)',
                        color: '#ff5555',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        marginBottom: '1.5rem',
                        textAlign: 'center',
                        border: '1px solid rgba(255, 60, 60, 0.2)',
                        fontSize: '0.9rem'
                    }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem' }}>Usuário</label>
                        <input
                            type="text"
                            required
                            value={form.username}
                            onChange={e => setForm({ ...form, username: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '0.85rem 1rem',
                                backgroundColor: '#1a1a1a',
                                border: '1px solid #333',
                                color: '#fff',
                                borderRadius: '8px',
                                outline: 'none',
                                transition: 'all 0.2s',
                                fontSize: '1rem'
                            }}
                            onFocus={e => e.target.style.borderColor = 'var(--brand-gold)'}
                            onBlur={e => e.target.style.borderColor = '#333'}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem' }}>Senha</label>
                        <input
                            type="password"
                            required
                            value={form.password}
                            onChange={e => setForm({ ...form, password: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '0.85rem 1rem',
                                backgroundColor: '#1a1a1a',
                                border: '1px solid #333',
                                color: '#fff',
                                borderRadius: '8px',
                                outline: 'none',
                                transition: 'all 0.2s',
                                fontSize: '1rem'
                            }}
                            onFocus={e => e.target.style.borderColor = 'var(--brand-gold)'}
                            onBlur={e => e.target.style.borderColor = '#333'}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            marginTop: '1rem',
                            width: '100%',
                            padding: '1rem',
                            backgroundColor: 'var(--brand-gold)',
                            color: '#000',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            opacity: loading ? 0.7 : 1,
                            transition: 'all 0.2s',
                            boxShadow: '0 4px 15px rgba(200, 160, 80, 0.3)'
                        }}
                        disabled={loading}
                        onMouseOver={e => { if (!loading) e.currentTarget.style.transform = 'translateY(-2px)' }}
                        onMouseOut={e => { if (!loading) e.currentTarget.style.transform = 'translateY(0)' }}
                    >
                        {loading ? 'AUTENTICANDO...' : 'ENTRAR NO SISTEMA'}
                    </button>
                </form>
            </div>
        </div>
    );
}

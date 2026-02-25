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
        <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-secondary)' }}>
            <div style={{ backgroundColor: 'var(--bg-primary)', padding: '3rem', borderRadius: '4px', width: '100%', maxWidth: '400px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <img src="/logo.png" alt="ATOMUS Logo" style={{ height: '60px', marginBottom: '1rem', margin: '0 auto' }} />
                    <h1 style={{ fontSize: '1.5rem', color: 'var(--bg-dark)' }}>
                        <span style={{ color: 'var(--brand-gold)', fontSize: '1rem' }}>Acesso Restrito</span>
                    </h1>
                </div>

                {error && <div style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Usuário</label>
                        <input
                            type="text"
                            required
                            value={form.username}
                            onChange={e => setForm({ ...form, username: e.target.value })}
                            style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Senha</label>
                        <input
                            type="password"
                            required
                            value={form.password}
                            onChange={e => setForm({ ...form, password: e.target.value })}
                            style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', padding: '1rem' }} disabled={loading}>
                        {loading ? 'AUTENTICANDO...' : 'ENTRAR NO SISTEMA'}
                    </button>
                </form>
            </div>
        </div>
    );
}

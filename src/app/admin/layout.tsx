import Link from 'next/link';
import AdminSidebar from '@/components/AdminSidebar';

export const metadata = {
    title: 'Painel Administrativo | ATOMUS',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <nav className="navbar" style={{ position: 'sticky', top: 0, backgroundColor: 'var(--bg-dark)', color: 'var(--text-white)', zIndex: 1000, padding: '1rem 0' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="logo" style={{ color: 'var(--brand-gold)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <img src="/logo.png" alt="ATOMUS Admin" style={{ height: '40px' }} />
                        <span style={{ fontSize: '1.25rem' }}>ADMIN</span>
                    </div>
                    <div className="nav-links">
                        <Link href="/" style={{ color: 'var(--text-white)' }}>Voltar ao Site</Link>
                    </div>
                </div>
            </nav>

            <div className="admin-dashboard-container" style={{ display: 'flex', flex: 1, backgroundColor: 'var(--bg-secondary)' }}>
                <div className="admin-sidebar" style={{ width: '250px', backgroundColor: 'var(--bg-primary)', padding: '2rem 0', borderRight: '1px solid #ddd' }}>
                    <AdminSidebar />
                </div>
                <section className="admin-content" style={{ flex: 1, padding: '3rem', width: '100%', overflowX: 'hidden' }}>
                    {children}
                </section>
            </div>
        </main>
    );
}

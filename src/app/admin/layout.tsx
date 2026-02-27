import Link from 'next/link';
import AdminSidebar from '@/components/AdminSidebar';

export const metadata = {
    title: 'Painel Administrativo | ATOMUS',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <nav className="navbar admin-navbar" style={{ position: 'sticky', top: 0, backgroundColor: 'var(--bg-dark)', color: 'var(--text-white)', zIndex: 1000, padding: '1rem 0' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="logo" style={{ color: 'var(--brand-gold)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <img src="/logo.png" alt="ATOMUS Admin" style={{ height: '40px' }} />
                        <span style={{ fontSize: '1.25rem' }}>ADMIN</span>
                    </div>
                    <div className="nav-links">
                        <Link href="/" style={{ color: 'var(--text-white)', fontWeight: 500 }}>Voltar ao Site</Link>
                    </div>
                </div>
            </nav>

            <div className="admin-dashboard-container">
                <div className="admin-sidebar-container">
                    <AdminSidebar />
                </div>
                <section className="admin-content">
                    {children}
                </section>
            </div>
        </main>
    );
}

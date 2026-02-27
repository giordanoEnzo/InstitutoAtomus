'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();

    if (pathname === '/admin/login') {
        return null;
    }

    const handleLogout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        router.push('/admin/login');
        router.refresh();
    };

    const links = [
        { href: '/admin', label: 'Dashboard Central' },
        { href: '/admin/leads', label: 'Gestão de Leads' },
        { href: '/admin/noticias', label: 'Gestão de Notícias' },
        { href: '/admin/ebooks', label: 'Gestão de E-books' },
        { href: '/admin/analytics', label: 'Central de Sensores' },
    ];

    return (
        <aside className="admin-sidebar-wrapper">
            <ul className="admin-sidebar-list">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`admin-sidebar-link ${isActive ? 'active' : ''}`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    );
                })}
                <li className="admin-sidebar-logout-container">
                    <button onClick={handleLogout} className="admin-sidebar-logout-btn">
                        Sair do Painel
                    </button>
                </li>
            </ul>
        </aside>
    );
}

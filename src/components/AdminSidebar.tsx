'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminSidebar() {
    const pathname = usePathname();

    if (pathname === '/admin/login') {
        return null;
    }

    return (
        <aside style={{ height: '100%' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>
                    <Link href="/admin" style={{ display: 'block', padding: '1rem 2rem', fontWeight: 'bold', color: 'var(--brand-gold-dark)' }}>
                        Dashboard Central
                    </Link>
                </li>
                <li>
                    <Link href="/admin/leads" style={{ display: 'block', padding: '1rem 2rem', color: 'var(--text-secondary)' }}>
                        Gestão de Leads
                    </Link>
                </li>
                <li>
                    <Link href="/admin/noticias" style={{ display: 'block', padding: '1rem 2rem', color: 'var(--text-secondary)' }}>
                        Gestão de Notícias
                    </Link>
                </li>
                <li>
                    <Link href="/admin/ebooks" style={{ display: 'block', padding: '1rem 2rem', color: 'var(--text-secondary)' }}>
                        Gestão de E-books
                    </Link>
                </li>
                <li>
                    <Link href="/admin/analytics" style={{ display: 'block', padding: '1rem 2rem', color: 'var(--text-secondary)' }}>
                        Central de Sensores
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

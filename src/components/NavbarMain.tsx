'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NavbarMain() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (pathname?.startsWith('/admin')) {
        return null;
    }

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                    <Link href="/">
                        <img src="/logo.png" alt="ATOMUS Logo" style={{ height: '50px', width: 'auto' }} />
                    </Link>
                </div>

                {/* Desktop and Mobile Menu Container */}
                <div className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
                    <Link href="/" className={pathname === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link href="/sobre" className={pathname === '/sobre' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Sobre</Link>
                    <Link href="/merylin-bento" className={pathname === '/merylin-bento' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Merylin Bento</Link>
                    <Link href="/noticias" className={pathname === '/noticias' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Notícias</Link>
                    <Link href="/biblioteca" className={pathname === '/biblioteca' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Biblioteca</Link>
                </div>

                {/* Hamburger Button for Mobile */}
                <button
                    className="hamburger"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    ☰
                </button>
            </div>
        </nav>
    );
}

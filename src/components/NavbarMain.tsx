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
                <div className="logo" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                    <Link href="/">
                        <img src="/logo.png" alt="ATOMUS Logo" style={{ height: scrolled ? '50px' : '65px', width: 'auto', objectFit: 'contain', transition: 'height 0.3s ease-in-out', flexShrink: 0 }} />
                    </Link>
                </div>

                {/* Desktop and Mobile Menu Container */}
                <div className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
                    <Link href="/" className={pathname === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link href="/sobre" className={pathname === '/sobre' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Sobre</Link>
                    <Link href="/treinamentos" className={pathname === '/treinamentos' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Treinamentos</Link>
                    <Link href="/nr-1" className={pathname === '/nr-1' ? 'active' : ''} onClick={() => setMenuOpen(false)}>NR-1</Link>
                    <Link href="/excelencia-organizacional" className={pathname === '/excelencia-organizacional' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Excelência</Link>
                    <Link href="/telemedicina" className={pathname === '/telemedicina' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Telemedicina</Link>
                    <Link href="/merylin-bento" className={pathname === '/merylin-bento' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Merylin B.</Link>
                    <Link href="/noticias" className={pathname === '/noticias' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Notícias</Link>
                    <Link href="/biblioteca" className={pathname === '/biblioteca' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Biblioteca</Link>
                    <Link href="/parceiros" className={pathname === '/parceiros' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Parceiros</Link>
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

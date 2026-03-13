'use client';

import Link from 'next/link';

interface FooterProps {
  backgroundColor?: string;
}

export default function FooterMain({ backgroundColor }: FooterProps) {
  return (
    <footer className="footer" style={backgroundColor ? { backgroundColor } : {}}>
      <div className="container">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <Link href="/" style={{ display: 'block', marginBottom: '1.5rem' }}>
              <img src="/logo.png" alt="ATOMUS Logo" style={{ height: '60px', width: 'auto' }} />
            </Link>
            <p style={{ fontSize: '0.9rem', marginTop: '1rem', color: 'white' }}>Instituto de Desenvolvimento Empresarial</p>
            <p style={{ fontSize: '0.8rem', color: 'var(--brand-gold)' }}>Onde existe direção, nasce a liderança.</p>
          </div>
          <div>
            <h4 style={{ color: 'var(--text-white)' }}>Institucional</h4>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', display: 'grid', gap: '0.5rem' }}>
              <li><Link href="/sobre" style={{ fontSize: '0.9rem', color: 'white' }}>Sobre Nós</Link></li>
              <li><Link href="/merylin-bento" style={{ fontSize: '0.9rem', color: 'white' }}>Merylin Bento</Link></li>
              <li><Link href="/noticias" style={{ fontSize: '0.9rem', color: 'white' }}>Notícias</Link></li>
              <li><Link href="/nr-1" style={{ fontSize: '0.9rem', color: 'white' }}>NR-1 em Saúde Mental</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--text-white)' }}>Recursos</h4>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', display: 'grid', gap: '0.5rem' }}>
              <li><Link href="/biblioteca" style={{ fontSize: '0.9rem', color: 'white' }}>Biblioteca de E-books</Link></li>
              <li><Link href="/privacidade" style={{ fontSize: '0.9rem', color: 'white' }}>Política de Privacidade</Link></li>
              <li><Link href="/contato" style={{ fontSize: '0.9rem', color: 'white' }}>Contato</Link></li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', fontSize: '0.8rem' }}>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)' }}>&copy; {new Date().getFullYear()} ATOMUS Instituto de Desenvolvimento Empresarial. Todos os direitos reservados.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.7 }}>
            <span style={{ color: 'white' }}>Desenvolvido por</span>
            <a href="https://hareware.com.br" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/hareware.png" alt="Hareware" style={{ height: '16px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

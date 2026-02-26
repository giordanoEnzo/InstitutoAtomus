import Link from 'next/link';

export default function Home() {
  return (
    <main>


      {/* Hero Section */}
      <section className="section section-dark" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '8rem' }}>
        <div className="container animate-fade-in-up">
          <div className="divider" style={{ margin: '0 0 2rem 0' }}></div>
          <h1 style={{ fontSize: '4rem', maxWidth: '800px', lineHeight: '1.1' }}>
            Onde falta estrutura, nasce o caos.<br />
            <span className="text-gold">Onde existe direção, nasce a liderança.</span>
          </h1>
          <p style={{ maxWidth: '600px', fontSize: '1.25rem', marginTop: '2rem', marginBottom: '3rem', color: 'var(--text-light)' }}>
            A ATOMUS constrói ambientes estratégicos onde a gestão deixa de ser improviso e se torna um método de comando sustentável e escalável.
          </p>
          <div className="flex-mobile" style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/contato" className="btn btn-primary">Solicitar Contato</Link>
            <Link href="/sobre" className="btn btn-secondary">Conhecer Diretrizes</Link>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="section">
        <div className="container grid" style={{ gridTemplateColumns: 'minmax(300px, 1fr) 2fr', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '3rem', color: 'var(--bg-dark)' }}>Instituto de<br />Desenvolvimento<br />Empresarial</h2>
            <div className="divider"></div>
          </div>
          <div>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: '500' }}>
              Não trabalhamos com motivação vazia. Trabalhamos com estrutura, inteligência e método.
            </p>
            <p>
              Acreditamos que líderes fortes constroem culturas blindadas. O nosso papel é fornecer a arquitetura intelectual e as bases estratégicas para que a sua empresa atinja o próximo nível de governança corporativa.
            </p>
            <Link href="/sobre" style={{ color: 'var(--brand-gold-dark)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>
              Ler Manifesto Completo &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Pilares Section */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2>Nossos Pilares</h2>
            <div className="divider" style={{ margin: '1rem auto' }}></div>
          </div>
          <div className="grid grid-3">
            {[
              {
                title: 'Estrutura de Liderança',
                text: 'Mapeamento e desenvolvimento de líderes capazes de sustentar o crescimento organizando processos e pessoas com firmeza e clareza.'
              },
              {
                title: 'Cultura Organizacional',
                text: 'Sistematização de valores, comportamentos e rituais que definem a identidade da empresa e garantem a retenção de talentos.'
              },
              {
                title: 'Inteligência Emocional Aplicada',
                text: 'Mapeamento comportamental e gestão de conflitos para que as decisões sejam tomadas com total racionalidade e foco no objetivo central.'
              }
            ].map((pilar, index) => (
              <div key={index} className="card-hover" style={{ background: 'var(--bg-primary)', padding: '3rem 2rem', borderRadius: '4px', borderTop: '4px solid var(--brand-gold)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{pilar.title}</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: 0 }}>{pilar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Snapshot */}
      <section className="section section-brand">
        <div className="container text-center">
          <div className="divider" style={{ margin: '0 auto 2rem' }}></div>
          <h2 style={{ maxWidth: '800px', margin: '0 auto 3rem', lineHeight: '1.4', fontWeight: '500' }}>
            "Liderança exige estrutura. Cultura forte não nasce, é construída. Gestão não é improviso, é método."
          </h2>
          <p style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', color: 'var(--brand-gold)' }}>
            ATOMUS – O Padrão de Excelência
          </p>
        </div>
      </section>

      {/* Diferenciais & CTA */}
      <section className="section">
        <div className="container text-center">
          <h2 style={{ marginBottom: '1rem' }}>Sua empresa está preparada para a ordem?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.125rem' }}>
            A intervenção da ATOMUS é pontual, assertiva e orientada a resultados mensuráveis.
            Sem promessas vagas. Com diagnóstico empresarial e execução direcionada.
          </p>
          <Link href="/contato" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.125rem' }}>
            SOLICITAR CONTATO
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h3 style={{ color: 'var(--text-white)' }}>ATOMUS</h3>
              <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>Instituto de Desenvolvimento Empresarial</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--brand-gold)' }}>Onde existe direção, nasce a liderança.</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--text-white)' }}>Institucional</h4>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', display: 'grid', gap: '0.5rem' }}>
                <li><Link href="/sobre" style={{ fontSize: '0.9rem' }}>Sobre Nós</Link></li>
                <li><Link href="/merylin-bento" style={{ fontSize: '0.9rem' }}>Merylin Bento</Link></li>
                <li><Link href="/noticias" style={{ fontSize: '0.9rem' }}>Notícias</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--text-white)' }}>Recursos</h4>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', display: 'grid', gap: '0.5rem' }}>
                <li><Link href="/biblioteca" style={{ fontSize: '0.9rem' }}>Biblioteca de E-books</Link></li>
                <li><Link href="/privacidade" style={{ fontSize: '0.9rem' }}>Política de Privacidade</Link></li>
                <li><Link href="/contato" style={{ fontSize: '0.9rem' }}>Contato</Link></li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', fontSize: '0.8rem' }}>
            <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} ATOMUS Instituto de Desenvolvimento Empresarial. Todos os direitos reservados.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.7 }}>
              <span>Desenvolvido por</span>
              <a href="https://hareware.com.br" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/hareware.png" alt="Hareware" style={{ height: '16px', width: 'auto' }} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

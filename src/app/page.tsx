import Link from 'next/link';
import FooterMain from '@/components/FooterMain';

export default function Home() {
  return (
    <main>


      {/* Hero Section */}
      <section className="section section-dark" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '8rem' }}>
        <div className="container animate-fade-in-up">
          <div className="divider" style={{ margin: '0 0 2rem 0' }}></div>
          <h1 style={{ fontSize: '4rem', maxWidth: '800px', lineHeight: '1.1' }}>
            Implementação estratégica da NR-1 e estruturação de empresas para alta performance.
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

      {/* NR-1 Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'flex-start', gap: '4rem' }}>
            <div>
              <h2 className="text-gold">NR-1 em Saúde Mental Corporativa</h2>
              <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>Sua empresa está preparada para atender às novas exigências da NR-1?</h3>
              <p style={{ color: 'white' }}>
                A atualização da NR-1, que inclui a obrigatoriedade da gestão de riscos psicossociais no ambiente de trabalho (assédio, sobrecarga, etc.), entrará em vigor de forma plena em <span className="text-gold" style={{ fontWeight: 'bold' }}>25 de maio de 2026</span>.
              </p>
              
              <div style={{ marginTop: '2rem', display: 'grid', gap: '2rem' }}>
                <div style={{ padding: '1.5rem', borderLeft: '3px solid var(--brand-gold)', background: 'rgba(255,255,255,0.05)' }}>
                  <h4 style={{ color: 'var(--brand-gold)', marginBottom: '0.5rem' }}>1) Riscos Psicossociais</h4>
                  <p style={{ fontSize: '1rem', margin: 0, color: 'white' }}>Integração da gestão de carga de trabalho e assédio ao GRO (Gerenciamento de Riscos Ocupacionais).</p>
                </div>
                <div style={{ padding: '1.5rem', borderLeft: '3px solid var(--brand-gold)', background: 'rgba(255,255,255,0.05)' }}>
                  <h4 style={{ color: 'var(--brand-gold)', marginBottom: '0.5rem' }}>2) Capacitação</h4>
                  <p style={{ fontSize: '1rem', margin: 0, color: 'white' }}>Obrigatoriedade de medidas para capacitar trabalhadores e gestores no reconhecimento de riscos.</p>
                </div>
                <div style={{ padding: '1.5rem', borderLeft: '3px solid var(--brand-gold)', background: 'rgba(255,255,255,0.05)' }}>
                  <h4 style={{ color: 'var(--brand-gold)', marginBottom: '0.5rem' }}>3) Prazo e Aplicação</h4>
                  <p style={{ fontSize: '1rem', margin: 0, color: 'white' }}>Fiscalização com possíveis penalidades a partir de 26 de maio de 2026.</p>
                </div>
              </div>
            </div>

            <div className="force-dark-text" style={{ background: 'white', padding: '2.5rem', borderRadius: '8px' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>O Custo da Negligência</h3>
              <p style={{ fontSize: '1.125rem' }}>
                A OMS estima que <span style={{ fontWeight: 'bold' }}>12 bilhões de dias de trabalho</span> são perdidos anualmente devido à depressão e ansiedade, custando <span style={{ fontWeight: 'bold' }}>1 trilhão de dólares</span> à economia global.
              </p>
              <div style={{ margin: '2rem 0', padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '4px' }}>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>No Brasil (Dados 2022):</p>
                <p style={{ fontSize: '1rem', margin: 0 }}>
                  Transtornos mentais (Ansiedade, Depressão, Estresse) representam <span className="text-gold" style={{ fontWeight: 'bold' }}>8,35%</span> dos adoecimentos ocupacionais, ocupando o <span style={{ fontWeight: 'bold' }}>2º lugar</span> geral.
                </p>
              </div>
              <p style={{ fontSize: '1.125rem', fontWeight: '500' }}>
                A adequação à NR-1 não é apenas exigência legal, mas uma oportunidade de estruturar a saúde mental e proteger a cultura organizacional.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/nr-1" className="btn btn-primary" style={{ width: '100%' }}>CONHECER DETALHES DA NR-1</Link>
              </div>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'white' }}>NR-1 não é apenas adequação.<br /><span className="text-gold">É estrutura organizacional.</span></h2>
            <p style={{ marginTop: '1.5rem', color: 'white' }}>Implementação completa com o Instituto ÁTOMUS.</p>
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
          <h3 className="text-gold" style={{ textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1.5rem', fontSize: '1rem' }}>Manifesto Atomus</h3>
          <h2 style={{ maxWidth: '800px', margin: '0 auto 2.5rem', lineHeight: '1.4', fontWeight: '500', fontSize: '2rem' }}>
            "Empresas não crescem apenas com estratégia. <br />
            Crescem quando pessoas estão estruturadas para sustentar resultados."
          </h2>
          <Link href="/sobre" className="text-gold" style={{ fontWeight: 'bold', fontSize: '1.1rem', textDecoration: 'none', borderBottom: '1px solid var(--brand-gold)', paddingBottom: '4px' }}>
            LER MANIFESTO COMPLETO &rarr;
          </Link>
        </div>
      </section>

      {/* Diferenciais & CTA */}
      <section className="section">
        <div className="container text-center">
          <h2 style={{ marginBottom: '1rem' }}>Sua empresa está preparada para a ordem?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.125rem' }}>
            A intervenção da ATOMUS é pontual, assertiva e orientada a results mensuráveis.
            Sem promessas vagas. Com diagnóstico empresarial e execução direcionada.
          </p>
          <Link href="/contato" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.125rem' }}>
            SOLICITAR CONTATO
          </Link>
        </div>
      </section>

      {/* Footer */}
      <FooterMain />
    </main>
  );
}

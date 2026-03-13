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

      {/* Selo Oficial Átomus Section */}
      <section className="section section-light" style={{ borderTop: '1px solid #e0e0e0', borderBottom: '1px solid #e0e0e0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="text-gold" style={{ letterSpacing: '2px', fontWeight: 'bold' }}>SELO OFICIAL ÁTOMUS</h2>
            <h3 style={{ fontSize: '1.75rem', marginTop: '0.5rem' }}>"Certificado de Conformidade em Saúde Mental Corporativa"</h3>
            <div className="divider" style={{ margin: '1.5rem auto' }}></div>
          </div>

          <div className="animate-fade-in-up" style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
            <img 
              src="/selo-atomus.png" 
              alt="Certificado de Conformidade Átomus" 
              style={{ width: '100%', maxWidth: '800px', borderRadius: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }} 
            />
          </div>

          <div className="grid grid-1" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div>
              <p style={{ fontWeight: '500', fontSize: '1.25rem', textAlign: 'center' }}>
                Esse selo certifica empresas que Implementaram a NR-1 de forma estruturada e desenvolveram liderança ativa na promoção da saúde mental organizacional.
              </p>
              <p style={{ textAlign: 'center' }}>
                Empresas que possuem uma Cultura Mental Consolidada com indicadores, acompanhamento contínuo e programa ativo.
              </p>
              <p style={{ fontStyle: 'italic', color: 'var(--brand-gold-dark)', fontWeight: 'bold', textAlign: 'center', fontSize: '1.2rem', marginTop: '1.5rem' }}>
                “Nosso objetivo é conduzir sua empresa à certificação institucional do Selo Atomus.”
              </p>
            </div>
          </div>

          <div style={{ marginTop: '5rem' }}>
            <h3 style={{ borderLeft: '4px solid var(--brand-gold)', paddingLeft: '1rem', marginBottom: '2rem' }}>Segurança Jurídica e Prevenção de Riscos Trabalhistas</h3>
            <div className="grid grid-2">
              <div>
                <p>
                  A implementação de práticas estruturadas de Saúde Mental Corporativa não é apenas uma ação de cuidado humano — é também uma estratégia de gestão de riscos organizacionais.
                </p>
                <p>
                  Empresas que investem na identificação e no gerenciamento de riscos psicossociais no ambiente de trabalho, conforme previsto nas diretrizes da Norma Regulamentadora nº 1 (NR-1), demonstram compromisso com a prevenção, a responsabilidade organizacional e a promoção de ambientes laborais mais seguros.
                </p>
              </div>
              <div style={{ background: 'var(--bg-primary)', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>A certificação do Instituto Atomus reconhece empresas que adotam práticas estruturadas voltadas à:</p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.75rem' }}>
                  <li><span className="text-gold" style={{ marginRight: '0.5rem' }}>•</span> Identificação de fatores de risco psicossocial</li>
                  <li><span className="text-gold" style={{ marginRight: '0.5rem' }}>•</span> Promoção da saúde mental no trabalho</li>
                  <li><span className="text-gold" style={{ marginRight: '0.5rem' }}>•</span> Desenvolvimento de lideranças conscientes</li>
                  <li><span className="text-gold" style={{ marginRight: '0.5rem' }}>•</span> Fortalecimento de uma cultura organizacional saudável</li>
                  <li><span className="text-gold" style={{ marginRight: '0.5rem' }}>•</span> Implementação de ações preventivas de bem-estar e gestão emocional</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section-brand" style={{ marginTop: '4rem', padding: '3rem', borderRadius: '4px' }}>
            <h3 style={{ color: 'var(--brand-gold)', marginBottom: '2rem' }}>Valor Estratégico da Certificação</h3>
            <div className="grid grid-2">
              <p style={{ color: 'white' }}>
                Ao implementar um programa estruturado de Saúde Mental Corporativa, a empresa passa a possuir um conjunto de práticas que fortalece a governança organizacional e auxilia na gestão de riscos psicossociais.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.75rem' }}>
                <li style={{ display: 'flex', gap: '0.5rem', color: 'white' }}><span className="text-gold">✔</span> Evidências documentadas de ações preventivas</li>
                <li style={{ display: 'flex', gap: '0.5rem', color: 'white' }}><span className="text-gold">✔</span> Programas de promoção de saúde e bem-estar</li>
                <li style={{ display: 'flex', gap: '0.5rem', color: 'white' }}><span className="text-gold">✔</span> Capacitação de lideranças</li>
                <li style={{ display: 'flex', gap: '0.5rem', color: 'white' }}><span className="text-gold">✔</span> Registro de iniciativas de cuidado organizacional</li>
                <li style={{ display: 'flex', gap: '0.5rem', color: 'white' }}><span className="text-gold">✔</span> Indicadores de gestão relacionados ao clima e saúde emocional</li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: '3rem', padding: '2rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.9rem', backgroundColor: '#f9f9f9' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--bg-dark)' }}>Observação Institucional</p>
            <p style={{ margin: 0, color: '#666' }}>
              A certificação concedida pelo Instituto Atomus reconhece a implementação de práticas estruturadas de promoção da saúde mental no ambiente corporativo.
              Embora tais iniciativas contribuam para a prevenção de riscos psicossociais e fortalecimento da cultura organizacional, a certificação não substitui as responsabilidades legais da empresa nem constitui garantia de inexistência de demandas judiciais.
            </p>
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
                <Link href="/contato" className="btn btn-primary" style={{ width: '100%' }}>Solicitar Implementação Estratégica</Link>
              </div>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'white' }}>NR-1 não é apenas adequação.<br /><span className="text-gold">É estrutura organizacional.</span></h2>
            <p style={{ marginTop: '1.5rem', color: 'white' }}>Implementação completa com o Instituto ÁTOMUS.</p>
          </div>
        </div>
      </section>
 
      {/* Telemedicina Corporativa Section */}
      <section className="section section-light">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <div className="divider" style={{ marginBottom: '2rem' }}></div>
              <h2 style={{ marginBottom: '1.5rem' }}>Telemedicina Corporativa</h2>
              <p style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--brand-gold-dark)', marginBottom: '2rem' }}>
                Cuidado acessível, prevenção inteligente e mais produtividade para sua empresa!
              </p>
              
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {[
                  "Atendimento médico rápido, sem necessidade de deslocamento",
                  "Redução de faltas por consultas médicas externas",
                  "Identificação precoce de problemas de saúde",
                  "Mais adesão ao cuidado preventivo",
                  "Apoio à saúde mental e emocional dos colaboradores",
                  "Redução de afastamentos e custos trabalhistas"
                ].map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ color: 'var(--brand-gold)', fontWeight: 'bold', fontSize: '1.2rem' }}>•</div>
                    <p style={{ margin: 0, fontSize: '1.1rem' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ background: 'var(--bg-secondary)', padding: '3rem', borderRadius: '8px', border: '1px solid #eee' }}>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                Durante anos, muitas empresas trataram a saúde dos colaboradores apenas como um custo operacional. O resultado é previsível: sintomas ignorados, doenças agravadas e queda de produtividade.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                A telemedicina muda esse cenário. Oferecendo suporte rápido para sintomas físicos e emocionais, permitindo que a empresa cuide antes que o problema se torne um afastamento.
              </p>
              <div style={{ padding: '2rem', background: 'white', borderRadius: '4px', borderLeft: '4px solid var(--brand-gold)' }}>
                <p style={{ margin: 0, fontWeight: '500' }}>
                  Através do Instituto Atomus, sua empresa pode implementar soluções integradas de saúde corporativa, incluindo telemedicina, gestão de riscos psicossociais e programas de bem-estar organizacional.
                </p>
              </div>
            </div>
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
            A intervenção da ATOMUS é pontual, assertiva e orientada a resultados mensuráveis.
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

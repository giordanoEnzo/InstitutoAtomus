import Link from 'next/link';
import FooterMain from '@/components/FooterMain';
import { Brain, GraduationCap, Calendar, CheckCircle2, ClipboardCheck, Users, Activity, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'NR-1 em Saúde Mental Corporativa | Instituto Átomus',
  description: 'Sua empresa está preparada para a nova NR-1? Gestão de riscos psicossociais, capacitação e implementação estratégica.'
};

export default function NR1Page() {
  return (
    <main className="nr1-page">
      {/* Hero Section */}
      <section className="section section-dark hero-nr1" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(16,37,26,1) 0%, rgba(26,59,42,1) 100%)', zIndex: 0 }}></div>
        <div className="container animate-fade-in-up" style={{ position: 'relative', zIndex: 1 }}>
          <div className="divider" style={{ margin: '0 0 2rem 0' }}></div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', maxWidth: '900px', lineHeight: '1.1', marginBottom: '1.5rem' }}>
            NR-1 em <span className="text-gold">Saúde Mental Corporativa</span>
          </h1>
          <p style={{ maxWidth: '700px', fontSize: '1.25rem', color: 'var(--text-light)', marginBottom: '3rem' }}>
            A atualização da Norma Regulamentadora nº 1 (NR-1) traz a obrigatoriedade da gestão de riscos psicossociais. Sua empresa tem até <span className="text-gold" style={{ fontWeight: 'bold' }}>25 de maio de 2026</span> para se adequar plenamente.
          </p>
          <div className="flex-mobile" style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/contato" className="btn btn-primary">Diagnóstico NR-1</Link>
            <a href="#detalhes" className="btn btn-secondary">Explorar Mudanças</a>
          </div>
        </div>
      </section>

      {/* Why NR-1? Statistics Section */}
      <section id="detalhes" className="section section-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>O Impacto Real no Mundo e no Brasil</h2>
            <div className="divider" style={{ margin: '1.5rem auto' }}></div>
            <p style={{ maxWidth: '800px', margin: '0 auto' }}>
              A saúde mental não é mais apenas uma pauta de RH, é uma exigência legal e uma necessidade econômica global.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div className="stats-box animate-fade-in-up" style={{ background: 'var(--bg-brand)', padding: '3rem', borderRadius: '12px', color: 'white' }}>
              <h3 className="text-gold" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Activity size={24} /> Cenário Global (OMS/OIT)
              </h3>
              <div style={{ display: 'grid', gap: '2.5rem' }}>
                <div>
                  <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--brand-gold)' }}>12 Bilhões</div>
                  <p style={{ color: 'white', margin: 0 }}>De dias de trabalho perdidos anualmente devido à depressão e ansiedade.</p>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--brand-gold)' }}>US$ 1 Trilhão</div>
                  <p style={{ color: 'white', margin: 0 }}>Custo anual à economia global em perda de produtividade.</p>
                </div>
              </div>
            </div>

            <div className="stats-box animate-fade-in-up" style={{ padding: '2rem', border: '1px solid #ddd', borderRadius: '12px' }}>
              <h3 style={{ color: 'var(--bg-dark)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <BarChart3 size={24} className="text-gold" /> Cenário no Brasil (2022)
              </h3>
              <p>Os transtornos mentais já são a <strong>2ª maior causa</strong> de adoecimentos ocupacionais no país.</p>
              
              <div style={{ marginTop: '2rem' }}>
                <div className="stat-bar" style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Transtornos Mentais (F41, F32, F43)</span>
                    <span style={{ fontWeight: 'bold' }}>8,35%</span>
                  </div>
                  <div style={{ width: '100%', height: '12px', background: '#eee', borderRadius: '6px', overflow: 'hidden' }}>
                    <div style={{ width: '8.35%', height: '100%', background: 'var(--brand-gold)' }}></div>
                  </div>
                </div>
                
                <div style={{ background: '#f9f9f9', padding: '1.5rem', borderRadius: '8px', fontSize: '0.95rem' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.5rem' }}>
                    <li><span className="text-gold">•</span> <strong>F41 - Ansiedade:</strong> 3,78% (3º lugar geral)</li>
                    <li><span className="text-gold">•</span> <strong>F32 - Depressão:</strong> 2,32%</li>
                    <li><span className="text-gold">•</span> <strong>F43 - Estresse/Adaptação:</strong> 2,25%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Updates Section */}
      <section className="section section-dark" style={{ background: 'var(--bg-dark)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="text-gold">Principais Pilares da Nova NR-1</h2>
            <div className="divider" style={{ margin: '1.5rem auto' }}></div>
          </div>

          <div className="grid grid-3">
            <div className="card-hover" style={{ background: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '8px', borderTop: '4px solid var(--brand-gold)' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <Brain size={40} className="text-gold" />
              </div>
              <h3 className="text-gold">Riscos Psicossociais</h3>
              <p style={{ color: 'white', fontSize: '1rem' }}>
                As empresas deverão integrar a gestão de carga de trabalho, assédio e outros fatores psicológicos ao seu <strong>Gerenciamento de Riscos Ocupacionais (GRO)</strong>.
              </p>
            </div>

            <div className="card-hover" style={{ background: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '8px', borderTop: '4px solid var(--brand-gold)' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <GraduationCap size={40} className="text-gold" />
              </div>
              <h3 className="text-gold">Capacitação Obrigatória</h3>
              <p style={{ color: 'white', fontSize: '1rem' }}>
                Novas medidas para capacitar trabalhadores e gestores no reconhecimento, avaliação e controle de riscos psicossociais no ambiente de trabalho.
              </p>
            </div>

            <div className="card-hover" style={{ background: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '8px', borderTop: '4px solid var(--brand-gold)' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <Calendar size={40} className="text-gold" />
              </div>
              <h3 className="text-gold">Vigência Plena</h3>
              <p style={{ color: 'white', fontSize: '1rem' }}>
                A fiscalização e penalidades baseadas na nova redação (Portaria MTE nº 1.419/2024) passarão a valer a partir de <strong>26 de maio de 2026</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selo Oficial Átomus Section (Migrated from Home) */}
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

      {/* Integration with GRO Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="animate-fade-in-up">
              <h2 style={{ color: 'var(--bg-dark)' }}>Integração ao Inventário de Riscos</h2>
              <div className="divider"></div>
              <p>
                A nova NR-1 exige que todas as organizações avaliem e controlem <strong>todos</strong> os perigos existentes, incluindo os decorrentes de fatores psicossociais.
              </p>
              <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '8px', borderLeft: '5px solid var(--brand-gold)' }}>
                <p style={{ margin: 0, fontStyle: 'italic', fontWeight: '500' }}>
                  "Isso significa incluir sobrecarga de trabalho, assédio e suas derivações diretamente no inventário de riscos da empresa."
                </p>
              </div>
              <p style={{ marginTop: '1.5rem' }}>
                A Portaria MTE nº 1.419/2024 deu ênfase a essa obrigação, transformando o que era interpretativo em uma exigência clara e auditável.
              </p>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ background: 'var(--bg-brand)', padding: '3rem', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <h3 className="text-gold" style={{ marginBottom: '2rem', textAlign: 'center' }}>Ciclo de Adequação Átomus</h3>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {[
                    { text: "Mapeamento de Fatores Psicossociais", icon: <ClipboardCheck size={20} /> },
                    { text: "Avaliação de Riscos no GRO", icon: <BarChart3 size={20} /> },
                    { text: "Plano de Ação e Controle", icon: <CheckCircle2 size={20} /> },
                    { text: "Capacitação de Lideranças", icon: <Users size={20} /> },
                    { text: "Certificação Selo Átomus", icon: <GraduationCap size={20} /> }
                  ].map((item, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem 1.5rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '1rem', color: 'white' }}>
                      <span style={{ color: 'var(--brand-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / Opportunity Section */}
      <section className="section section-brand" style={{ padding: '8rem 0' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '2.5rem', color: 'var(--brand-gold)', marginBottom: '2rem' }}>
            NR-1 não é apenas adequação.<br />É estrutura organizacional.
          </h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.25rem', color: 'white' }}>
            A adequação não deve ser vista apenas como exigência legal, mas como uma oportunidade de estruturar a saúde mental, fortalecer lideranças e proteger a cultura organizacional da sua empresa.
          </p>
          <div className="divider" style={{ margin: '0 auto 3rem' }}></div>
          <h3 style={{ color: 'white' }}>Implementação completa com o Instituto ÁTOMUS.</h3>
          <div style={{ marginTop: '3rem' }}>
            <Link href="/contato" className="btn btn-primary" style={{ padding: '1.5rem 3rem' }}>Falar com Especialistas</Link>
          </div>
        </div>
      </section>

      <FooterMain backgroundColor="var(--bg-dark)" />
    </main>
  );
}

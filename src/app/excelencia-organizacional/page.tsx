import Link from 'next/link';
import FooterMain from '@/components/FooterMain';
import { Award, CheckCircle2, ShieldCheck, Sparkles, Building2, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Excelência Organizacional & Selo de Conformidade | Instituto Atomus',
  description: 'Conheça o Selo de Conformidade em Saúde Mental da Atomus. Prepare sua empresa para a conformidade e sua cultura para o futuro.',
};

export default function ExcelenciaOrganizacionalPage() {
  return (
    <main className="excelencia-page">
      {/* Hero Section */}
      <section className="section section-dark hero-excelencia" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(16,37,26,1) 0%, rgba(26,59,42,1) 100%)', zIndex: 0 }}></div>
        <div className="container animate-fade-in-up" style={{ position: 'relative', zIndex: 1 }}>
          <div className="divider" style={{ margin: '0 0 2rem 0' }}></div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', maxWidth: '900px', lineHeight: '1.1', marginBottom: '1.5rem' }}>
            Excelência <span className="text-gold">Organizacional</span>
          </h1>
          <p style={{ maxWidth: '700px', fontSize: '1.25rem', color: 'var(--text-light)', marginBottom: '3rem' }}>
            A excelência de uma organização não se limita apenas a processos e números, mas se constrói sobre as bases sólidas do desenvolvimento humano e da saúde emocional de seu time.
          </p>
          <div className="flex-mobile" style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/contato" className="btn btn-primary">Falar com Especialistas</Link>
            <a href="#selo-conformidade" className="btn btn-secondary">Conhecer o Selo</a>
          </div>
        </div>
      </section>

      {/* Selo de Conformidade de Saúde Mental Section */}
      <section id="selo-conformidade" className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="animate-fade-in-up">
              <span style={{ 
                display: 'inline-block', 
                padding: '0.25rem 0.75rem', 
                background: 'rgba(217, 188, 82, 0.15)', 
                color: 'var(--brand-gold-dark)', 
                fontWeight: '700', 
                fontSize: '0.85rem', 
                textTransform: 'uppercase', 
                letterSpacing: '1px', 
                marginBottom: '1.5rem', 
                borderRadius: '4px' 
              }}>
                Diferencial Exclusivo
              </span>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--bg-dark)' }}>
                Selo de Conformidade de Saúde Mental
              </h2>
              <div className="divider" style={{ margin: '1.5rem 0' }}></div>
              <p style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                Mais do que adequar empresas às exigências legais, a Atomus prepara organizações para serem reconhecidas como referências em saúde mental, desenvolvimento humano e excelência organizacional.
              </p>
              <p style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--brand-gold-dark)' }}>
                Sua empresa preparada para a conformidade. Sua cultura preparada para o futuro!
              </p>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="card-hover" style={{ 
                background: 'var(--bg-brand)', 
                padding: '3rem', 
                borderRadius: '16px', 
                color: 'white', 
                textAlign: 'center',
                boxShadow: '0 20px 40px rgba(16, 37, 26, 0.15)',
                maxWidth: '450px',
                border: '2px solid var(--brand-gold)'
              }}>
                <div style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(217, 188, 82, 0.15)', color: 'var(--brand-gold)', marginBottom: '1.5rem' }}>
                  <Award size={48} />
                </div>
                <h3 className="text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Selo de Excelência</h3>
                <p style={{ color: 'white', fontSize: '1rem', marginBottom: '2rem' }}>
                  A chancela que atesta o compromisso da sua corporação com a integridade psicológica e bem-estar organizacional ativo.
                </p>
                <Link href="/contato" className="btn btn-primary" style={{ width: '100%' }}>Solicitar Avaliação</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selo Oficial Atomus Section (Migrated from NR-1) */}
      <section className="section section-light" style={{ borderTop: '1px solid #e0e0e0', borderBottom: '1px solid #e0e0e0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="text-gold" style={{ letterSpacing: '2px', fontWeight: 'bold' }}>SELO OFICIAL ATOMUS</h2>
            <h3 style={{ fontSize: '1.75rem', marginTop: '0.5rem' }}>"Certificado de Conformidade em Saúde Mental Corporativa"</h3>
            <div className="divider" style={{ margin: '1.5rem auto' }}></div>
          </div>

          <div className="animate-fade-in-up" style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
            <img 
              src="/selo-atomus.png" 
              alt="Certificado de Conformidade Atomus" 
              style={{ width: '100%', maxWidth: '800px', borderRadius: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }} 
            />
          </div>

          <div className="grid grid-1" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div>
              <p style={{ fontWeight: '500', fontSize: '1.25rem', textAlign: 'center' }}>
                Esse selo certifica empresas que implementaram a NR-1 de forma estruturada e desenvolveram liderança ativa na promoção da saúde mental organizacional.
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
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span className="text-gold">•</span> Identificação de fatores de risco psicossocial</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span className="text-gold">•</span> Promoção da saúde mental no trabalho</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span className="text-gold">•</span> Desenvolvimento de lideranças conscientes</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span className="text-gold">•</span> Fortalecimento de uma cultura organizacional saudável</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span className="text-gold">•</span> Implementação de ações preventivas de bem-estar e gestão emocional</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section-brand" style={{ marginTop: '4rem', padding: '3rem', borderRadius: '4px' }}>
            <h3 style={{ color: 'var(--brand-gold)', marginBottom: '2rem' }}>Valor Estratégico da Certificação</h3>
            <div className="grid grid-2">
              <p style={{ color: 'white' }}>
                Ao implementar um program estruturado de Saúde Mental Corporativa, a empresa passa a possuir um conjunto de práticas que fortalece a governança organizacional e auxilia na gestão de riscos psicossociais.
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

      {/* Call To Action Section */}
      <section className="section section-brand" style={{ padding: '8rem 0' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '2.5rem', color: 'var(--brand-gold)', marginBottom: '2rem' }}>
            Eleve o patamar de conformidade e excelência da sua organização
          </h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.25rem', color: 'white' }}>
            Garanta a segurança jurídica da sua empresa e promova um ecossistema corporativo próspero, produtivo e blindado contra riscos psicossociais.
          </p>
          <div className="divider" style={{ margin: '0 auto 3rem' }}></div>
          <h3 style={{ color: 'white', marginBottom: '2rem' }}>Pronto para iniciar a jornada rumo à certificação do Selo Atomus?</h3>
          <div>
            <Link href="/contato" className="btn btn-primary" style={{ padding: '1.5rem 3rem' }}>Falar com Especialistas</Link>
          </div>
        </div>
      </section>

      <FooterMain backgroundColor="var(--bg-dark)" />
    </main>
  );
}

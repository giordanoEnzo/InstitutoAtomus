import Link from 'next/link';
import FooterMain from '@/components/FooterMain';
import { Activity, ShieldCheck, Zap, Heart, Users, TrendingDown, Clock, MapPinOff } from 'lucide-react';

export const metadata = {
  title: 'Telemedicina Corporativa | Instituto Atomus',
  description: 'Cuidado acessível, prevenção inteligente e mais produtividade para sua empresa com a Telemedicina Corporativa do Instituto Atomus.'
};

export default function TelemedicinaPage() {
  return (
    <main className="telemedicina-page">
      {/* Hero Section */}
      <section className="section section-dark hero-telemedicina" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '8rem' }}>
        <div className="absolute-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, #0f1c15 0%, #1a3b2a 100%)', zIndex: 0 }}></div>
        <div className="container animate-fade-in-up" style={{ position: 'relative', zIndex: 1 }}>
          <div className="divider" style={{ margin: '0 0 2rem 0' }}></div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '800px', lineHeight: '1.1', marginBottom: '1.5rem' }}>
            Telemedicina <span className="text-gold">Corporativa</span>
          </h1>
          <p style={{ maxWidth: '650px', fontSize: '1.25rem', color: 'var(--text-light)', marginBottom: '3rem' }}>
            Cuidado acessível, prevenção inteligente e mais produtividade para sua empresa. O suporte médico que seus colaboradores precisam, onde quer que estejam.
          </p>
          <div className="flex-mobile" style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/contato" className="btn btn-primary">Solicitar Proposta</Link>
            <a href="#beneficios" className="btn btn-secondary">Conhecer Benefícios</a>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="beneficios" className="section section-light">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>A Nova Era do Cuidado</h2>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                Durante anos, muitas empresas trataram a saúde dos colaboradores apenas como um custo operacional. O resultado é previsível: sintomas ignorados, doenças agravadas e queda de produtividade.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                A telemedicina muda esse cenário. Oferecendo suporte rápido para sintomas físicos e emocionais, permitindo que a empresa cuide antes que o problema se torne um afastamento.
              </p>
              <div style={{ padding: '2.5rem', background: 'var(--bg-secondary)', borderRadius: '8px', borderLeft: '4px solid var(--brand-gold)' }}>
                <p style={{ margin: 0, fontWeight: '500', fontSize: '1.1rem' }}>
                  Através do Instituto Atomus, sua empresa pode implementar soluções integradas de saúde corporativa, incluindo telemedicina, gestão de riscos psicossociais e programas de bem-estar organizacional.
                </p>
              </div>
            </div>

            <div className="grid grid-1" style={{ gap: '1.5rem' }}>
              {[
                { title: "Atendimento Rápido", desc: "Consultas sem necessidade de deslocamento ou espera em prontos-socorros.", icon: <Clock className="text-gold" /> },
                { title: "Redução de Faltas", desc: "Menos ausências motivadas por consultas médicas externas de rotina.", icon: <TrendingDown className="text-gold" /> },
                { title: "Prevenção Inteligente", desc: "Identificação precoce de problemas de saúde antes que se agravem.", icon: <Zap className="text-gold" /> },
                { title: "Saúde Mental", desc: "Apoio emocional especializado e contínuo para seus colaboradores.", icon: <Heart className="text-gold" /> },
                { title: "Gestão de Custos", desc: "Redução de afastamentos prolongados e custos com sinistros de saúde.", icon: <ShieldCheck className="text-gold" /> },
                { title: "Acesso Universal", desc: "Suporte médico de qualidade para colaboradores em qualquer localidade.", icon: <MapPinOff className="text-gold" /> }
              ].map((benefit, index) => (
                <div key={index} style={{ display: 'flex', gap: '1.25rem', padding: '1.5rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0' }}>
                  <div style={{ flexShrink: 0, marginTop: '0.25rem' }}>{benefit.icon}</div>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem' }}>{benefit.title}</h4>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#666' }}>{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="section section-dark" style={{ background: '#0f1c15' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="text-gold">Abordagem Integrada Atomus</h2>
            <div className="divider" style={{ margin: '1.5rem auto' }}></div>
            <p style={{ color: 'white', maxWidth: '700px', margin: '0 auto' }}>
              Não oferecemos apenas uma ferramenta, oferecemos uma estratégia de saúde.
            </p>
          </div>

          <div className="grid grid-3">
             <div style={{ background: 'rgba(255,255,255,0.05)', padding: '3rem 2rem', borderRadius: '8px', textAlign: 'center' }}>
                <Users size={40} className="text-gold" style={{ margin: '0 auto 1.5rem' }} />
                <h3 className="text-gold" style={{ marginBottom: '1rem' }}>Foco nas Pessoas</h3>
                <p style={{ color: 'white', margin: 0 }}>Humanização no atendimento digital, garantindo acolhimento e escuta ativa.</p>
             </div>
             <div style={{ background: 'rgba(255,255,255,0.05)', padding: '3rem 2rem', borderRadius: '8px', textAlign: 'center' }}>
                <Activity size={40} className="text-gold" style={{ margin: '0 auto 1.5rem' }} />
                <h3 className="text-gold" style={{ marginBottom: '1rem' }}>Monitoramento</h3>
                <p style={{ color: 'white', margin: 0 }}>Indicadores de saúde para que a gestão possa tomar decisões baseadas em dados.</p>
             </div>
             <div style={{ background: 'rgba(255,255,255,0.05)', padding: '3rem 2rem', borderRadius: '8px', textAlign: 'center' }}>
                <ShieldCheck size={40} className="text-gold" style={{ margin: '0 auto 1.5rem' }} />
                <h3 className="text-gold" style={{ marginBottom: '1rem' }}>Segurança</h3>
                <p style={{ color: 'white', margin: 0 }}>Plataforma segura e em conformidade total com a LGPD e normas médicas.</p>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-brand">
        <div className="container text-center">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Sua empresa pronta para cuidar de quem faz a diferença.</h2>
          <div className="divider" style={{ margin: '0 auto 3rem' }}></div>
          <Link href="/contato" className="btn btn-primary" style={{ padding: '1.5rem 4rem', fontSize: '1.2rem' }}>IMPLEMENTAR AGORA</Link>
        </div>
      </section>

      <FooterMain />
    </main>
  );
}

import Link from 'next/link';
import FooterMain from '@/components/FooterMain';
import { 
  GraduationCap, 
  Brain, 
  Users, 
  Target, 
  HeartHandshake, 
  Trophy, 
  Mic2, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Video,
  Lightbulb,
  Briefcase,
  TrendingUp,
  ShieldCheck,
  MessageCircle,
  Gem
} from 'lucide-react';

export const metadata = {
  title: 'Treinamentos Empresariais | Instituto Atomus',
  description: 'Desenvolvimento de pessoas e estruturação de resultados com base em neurociência, inteligência emocional e gestão estratégica.'
};

export default function TreinamentosPage() {
  const trainingAreas = [
    {
      title: 'Gestão e Liderança Estratégica',
      description: 'Desenvolvimento de líderes preparados para tomar decisões, conduzir equipes, organizar processos e sustentar resultados.',
      icon: <Trophy size={32} />,
      label: 'Temas abordados:',
      topics: [
        'Liderança humanizada e estratégica',
        'Gestão de conflitos',
        'Comunicação assertiva',
        'Delegação e acompanhamento de resultados',
        'Cultura organizacional e engajamento',
        'Liderança em cenários de mudança'
      ]
    },
    {
      title: 'Inteligência Emocional no Trabalho',
      description: 'Treinamento voltado ao fortalecimento da maturidade emocional, prevenção do estresse e melhoria das relações profissionais.',
      icon: <Brain size={32} />,
      label: 'Benefícios:',
      topics: [
        'Redução de conflitos',
        'Melhor clima organizacional',
        'Aumento da produtividade',
        'Maior equilíbrio emocional nas equipes'
      ]
    },
    {
      title: 'Desenvolvimento de Soft Skills',
      description: 'Fortalecimento das competências comportamentais essenciais para o desempenho profissional e crescimento organizacional.',
      icon: <Gem size={32} />,
      label: 'Trabalhamos:',
      topics: [
        'Proatividade',
        'Responsabilidade',
        'Trabalho em equipe',
        'Adaptabilidade',
        'Organização',
        'Foco em resultados'
      ]
    },
    {
      title: 'Atendimento ao Cliente e Experiência do Consumidor',
      description: 'Capacitação para melhoria da comunicação, postura profissional e qualidade no atendimento.',
      icon: <HeartHandshake size={32} />,
      label: 'Resultados esperados:',
      topics: [
        'Maior satisfação do cliente',
        'Fidelização',
        'Redução de reclamações',
        'Fortalecimento da imagem da empresa'
      ]
    }
  ];

  return (
    <main className="treinamentos-page">
      {/* Hero Section */}
      <section className="section section-brand" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: '10rem' }}>
        <div className="container animate-fade-in-up">
          <div className="divider" style={{ margin: '0 0 2rem 0' }}></div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', maxWidth: '900px', lineHeight: '1.1', marginBottom: '1.5rem' }}>
            Treinamentos <span className="text-gold">Empresariais</span>
          </h1>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '400', color: 'var(--text-light)', marginBottom: '3rem', maxWidth: '700px' }}>
            Desenvolvimento de Pessoas. Estruturação de Resultados.
          </h2>
          <p style={{ maxWidth: '700px', fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '3rem', lineHeight: '1.8' }}>
            O Instituto ATOMUS oferece treinamentos corporativos voltados ao fortalecimento da liderança, desenvolvimento de competências comportamentais e promoção da saúde mental no ambiente organizacional.
          </p>
          <div className="flex-mobile" style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/contato" className="btn btn-primary">Solicitar Proposta</Link>
            <a href="#metodologia" className="btn btn-secondary">Conhecer Metodologia</a>
          </div>
        </div>
      </section>

      {/* Metodologia Section */}
      <section id="metodologia" className="section section-light">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2 className="text-gold">Fundamentação Científica e Prática</h2>
              <div className="divider"></div>
              <p>
                Nossos programas são estruturados com base em <strong>neurociência</strong>, <strong>inteligência emocional</strong> e <strong>gestão estratégica</strong>.
              </p>
              <p>
                Preparamos equipes e gestores para lidar com os desafios atuais do mercado, aumentar a produtividade e construir ambientes de trabalho mais saudáveis e sustentáveis.
              </p>
              <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid var(--brand-gold)', marginTop: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <p style={{ margin: 0, fontWeight: '500', fontStyle: 'italic' }}>
                  "Atuamos com metodologias práticas, conteúdos atualizados e aplicação direta na realidade da sua empresa."
                </p>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {[
                { title: 'Neurociência', icon: <Brain />, text: 'Foco no funcionamento cerebral para mudanças reais.' },
                { title: 'Gestão Estratégica', icon: <TrendingUp />, text: 'Gestão focada em comportamentos e resultados.' },
                { title: 'Pragmatismo', icon: <Target />, text: 'Conteúdo direto para aplicação imediata.' },
                { title: 'Saúde Mental', icon: <ShieldCheck />, text: 'Prevenção e sustentabilidade emocional.' }
              ].map((item, i) => (
                <div key={i} style={{ padding: '2rem', background: 'var(--bg-primary)', borderRadius: '8px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                  <div style={{ color: 'var(--brand-gold)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                  <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.85rem', margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo de Treinamentos */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '5rem' }}>
            <h2>Nossos Treinamentos</h2>
            <div className="divider" style={{ margin: '1.5rem auto' }}></div>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>Programas intensivos desenhados para elevar o nível de governança e cultura da sua organização.</p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
            {trainingAreas.map((area, index) => (
              <div key={index} className="card-hover" style={{ 
                background: 'var(--bg-primary)', 
                padding: '3rem', 
                borderRadius: '12px', 
                border: '1px solid #eee', 
                boxShadow: '0 15px 40px rgba(0,0,0,0.02)', 
                display: 'flex', 
                flexDirection: 'column', 
                flex: '1 1 450px', 
                maxWidth: '580px' 
              }}>
                <div style={{ color: 'var(--brand-gold)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {area.icon}
                  <h3 style={{ fontSize: '1.6rem', margin: 0 }}>{area.title}</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flex: 1 }}>{area.description}</p>
                
                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.25rem', color: 'var(--brand-gold-dark)', fontWeight: 'bold' }}>{area.label}</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }}>
                  {area.topics.map((topic, i) => (
                    <li key={i} style={{ fontSize: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--brand-gold)', fontWeight: 'bold' }}>•</span> {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Palestras e Programas Especiais */}
      <section className="section section-dark" style={{ background: 'var(--bg-dark)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2 className="text-gold">Palestras Corporativas e Programas Especiais</h2>
              <div className="divider"></div>
              <p style={{ color: 'white' }}>
                Também desenvolvemos palestras e treinamentos personalizados adaptados à realidade e às necessidades de cada empresa.
              </p>
              <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }}>
                {[
                  { text: 'Saúde mental no trabalho' },
                  { text: 'Equilíbrio emocional e qualidade de vida' },
                  { text: 'Gestão da felicidade e bem-estar corporativo' },
                  { text: 'Comunicação não violenta' },
                  { text: 'Desenvolvimento profissional' },
                  { text: 'Motivação e propósito no ambiente organizacional' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'white' }}>
                    <span style={{ color: 'var(--brand-gold)', fontWeight: 'bold' }}>•</span>
                    <span style={{ fontSize: '1rem' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '3rem', borderRadius: '12px', textAlign: 'center' }}>
              <Mic2 size={48} className="text-gold" style={{ marginBottom: '1.5rem' }} />
              <h3>Personalização Total</h3>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>
                O seu desafio é único. Nossos especialistas mapeiam a realidade da sua empresa para entregar um conteúdo que ressoe com a sua cultura.
              </p>
              <Link href="/contato" className="btn btn-primary">Falar com Consultor</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Formatos de Atendimento */}
      <section className="section section-light">
        <div className="container text-center">
          <h2 style={{ marginBottom: '1rem' }}>Formatos de Atendimento</h2>
          <div className="divider" style={{ margin: '1rem auto 4rem' }}></div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
            {[
              { title: 'Treinamentos presenciais', icon: <MapPin /> },
              { title: 'Treinamentos online', icon: <Video /> },
              { title: 'Programas contínuos de desenvolvimento', icon: <TrendingUp /> },
              { title: 'Workshops e imersões', icon: <Clock /> },
              { title: 'Palestras corporativas', icon: <Mic2 /> }
            ].map((item, i) => (
              <div key={i} className="card-hover" style={{ 
                padding: '2.5rem', 
                background: 'white', 
                borderRadius: '8px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1.5rem', 
                textAlign: 'left',
                flex: '1 1 300px',
                maxWidth: '380px'
              }}>
                <div style={{ color: 'var(--brand-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>
                  <span style={{ color: 'var(--brand-gold)', marginRight: '0.5rem' }}>✔</span> {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section" style={{ padding: '8rem 0', background: 'var(--bg-secondary)' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '2.5rem', color: 'var(--bg-dark)', marginBottom: '1.5rem', fontWeight: 'bold' }}>
            Fortaleça sua equipe. <br />
            Estruture sua liderança. <br />
            <span className="text-gold">Desenvolva resultados sustentáveis.</span>
          </h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 3rem', fontSize: '1.25rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
            Fale com o Instituto ATOMUS e conheça o treinamento ideal para sua empresa.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/contato" className="btn btn-primary" style={{ padding: '1.5rem 3rem', fontSize: '1.125rem' }}>
              SOLICITAR PROPOSTA
            </Link>
          </div>
        </div>
      </section>

      <FooterMain backgroundColor="var(--bg-dark)" />
    </main>
  );
}

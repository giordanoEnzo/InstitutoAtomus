import Link from 'next/link';
import FooterMain from '@/components/FooterMain';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sobre a ATOMUS | Instituto de Desenvolvimento Empresarial',
};

export default function SobrePage() {
    return (
        <main>

            {/* Manifesto Section */}
            <section className="section section-brand" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <div className="divider" style={{ margin: '0 auto 2rem' }}></div>
                        <h2 style={{ fontSize: '3rem' }}>Manifesto Atomus</h2>
                    </div>
                    
                    <div className="manifesto-content" style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'white' }}>
                        <p style={{ fontSize: '1.5rem', fontWeight: '500', marginBottom: '2rem', borderLeft: '4px solid var(--brand-gold)', paddingLeft: '2rem' }}>
                            Empresas não crescem apenas com estratégia. <br />
                            Crescem quando pessoas estão estruturadas para sustentar resultados.
                        </p>
                        
                        <p>Vivemos uma nova era no ambiente corporativo, onde produtividade, saúde mental, liderança e cultura organizacional caminham juntas.</p>
                        
                        <p style={{ fontWeight: '500', color: 'var(--brand-gold)' }}>Ignorar essa realidade não é apenas um erro de gestão. É um risco para o futuro das empresas.</p>
                        
                        <p>A Atomus nasce para responder a esse novo cenário.</p>
                        
                        <p>Integramos conhecimento científico, desenvolvimento humano e estratégia empresarial para estruturar organizações mais conscientes, produtivas e sustentáveis.</p>
                        
                        <p>Acreditamos que empresas fortes são construídas por líderes preparados, equipes saudáveis e culturas organizacionais sólidas.</p>
                        
                        <p>Mais do que treinamentos ou consultorias isoladas, estamos construindo um ecossistema de desenvolvimento empresarial, conectando conhecimento, especialistas, parceiros e ferramentas capazes de apoiar empresas em seus desafios atuais e futuros.</p>
                        
                        <p>Nosso compromisso é ajudar organizações a evoluírem com estrutura, inteligência emocional e responsabilidade humana.</p>
                        
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginTop: '3rem', color: 'var(--brand-gold)' }}>
                            Porque empresas desenvolvidas e pessoas saudáveis produzem resultados extraordinários!
                        </p>
                    </div>
                </div>
            </section>

            {/* No que acreditamos Section */}
            <section className="section section-light">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <h2>No que acreditamos</h2>
                        <div className="divider" style={{ margin: '1rem auto' }}></div>
                    </div>
                    
                    <div className="grid grid-2" style={{ gap: '2rem' }}>
                        {[
                            "Acreditamos que empresas saudáveis constroem sociedades mais fortes.",
                            "Acreditamos que liderança exige preparo emocional, visão estratégica e responsabilidade humana.",
                            "Acreditamos que saúde mental no trabalho não é apenas um cuidado individual, mas um compromisso organizacional.",
                            "Acreditamos que cultura empresarial não se cria por discurso, mas por práticas consistentes.",
                            "Acreditamos que conhecimento aplicado transforma ambientes de trabalho e potencializa resultados.",
                            "E acreditamos que o futuro das organizações depende da capacidade de integrar produtividade, desenvolvimento humano e bem-estar."
                        ].map((belief, index) => (
                            <div key={index} style={{ padding: '2rem', background: 'white', borderLeft: '4px solid var(--brand-gold)', borderRadius: '0 8px 8px 0', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: '500' }}>{belief}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '4rem', padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '8px', textAlign: 'center' }}>
                        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
                            Mais do que oferecer soluções pontuais, o Instituto Atomus busca estruturar empresas para um crescimento consistente, integrando estratégia, pessoas e propósito.
                        </p>
                        <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--bg-dark)' }}>
                            Por isso, a Atomus trabalha para fortalecer empresas que desejam crescer com consciência, estrutura e impacto positivo.
                        </p>
                    </div>
                </div>
            </section>

            <FooterMain />
        </main>
    );
}

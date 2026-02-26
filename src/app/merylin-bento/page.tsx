export const metadata = {
    title: 'Merylin Bento | Especialista | ATOMUS',
};

export default function MerylinBentoPage() {
    return (
        <main>

            {/* Hero */}
            <section className="section section-dark" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
                <div className="container text-center animate-fade-in-up">
                    <div className="divider" style={{ margin: '0 auto 2rem' }}></div>
                    <h1>Merylin Bento</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', color: 'var(--brand-gold)' }}>
                        Psicanalista, Consultora Empresarial e CEO do Instituto Atomus
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div className="grid" style={{ gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>

                        {/* Imagem da Especialista */}
                        <div style={{ position: 'sticky', top: '100px', width: '100%', overflow: 'hidden', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                            <img
                                src="/merylin-foto.jpg"
                                alt="Merylin Bento"
                                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                            />
                        </div>

                        {/* Texto Biográfico */}
                        <div className="rich-text-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-primary)' }}>
                            <p>
                                <strong>Merylin Bento</strong> é Psicanalista, Consultora Empresarial e CEO do <strong>Instituto Atomus Desenvolvimento Empresarial</strong>. Natural de Araras–SP, construiu sua trajetória profissional a partir da integração entre ciência, desenvolvimento humano e estratégia organizacional, dedicando-se à transformação consciente de pessoas e empresas.
                            </p>
                            <p>
                                Formada em Gestão de Saúde pela Anhanguera/Uniderp e com formação em Psicologia, atua como especialista em desenvolvimento humano, cultura organizacional e saúde emocional no trabalho. Sua formação é complementada por especializações em Mindfulness, Constelação Sistêmica (familiar e empresarial), Programação Neurolinguística (PNL) e Inteligência Emocional, o que consolida uma atuação multidisciplinar e estratégica.
                            </p>
                            <p>
                                Com um percurso sólido na área da saúde emocional, Merylin possui formações em Cuidados Paliativos e Fim de Vida pelo <strong>Albert Einstein Centro de Estudos e Pesquisa</strong>, Psicologia Hospitalar e Psico-oncologia, além de certificação internacional como <strong>Chief Happiness Officer (CHO)</strong>, voltada à gestão de felicidade, bem-estar e engajamento no ambiente corporativo.
                            </p>
                            <p>
                                Atualmente, cursa Doutorado em Psicanálise e Gestão em Recursos Humanos, aprofundando seus estudos na construção de ambientes organizacionais emocionalmente saudáveis, produtivos e alinhados às exigências legais vigentes, incluindo a NR-1. Ao longo de sua jornada, desenvolveu expertise em neurociência e comportamento, cultura organizacional, liderança e gestão de pessoas, prevenção do burnout, saúde mental corporativa, perfil comportamental e inteligência emocional.
                            </p>
                            <p>
                                É criadora do programa <strong>Emotional Therapy</strong>, idealizadora do projeto <strong>Café.com ELAS</strong>, voltado ao networking e fortalecimento feminino, e líder do Instituto Atomus, organização que promove a transformação estratégica de empresas por meio do desenvolvimento humano.
                            </p>
                            <p>
                                Sua atuação profissional integra mentorias, cursos, palestras, consultorias empresariais e atendimentos individuais, sempre com a missão de alinhar performance, saúde emocional e propósito. Paralelamente, exerce relevante papel na esfera pública como Vice-Presidente do Conselho Municipal de Assistência Social (CMAS) de Araras (gestão 2025–2028), contribuindo para a formulação e fiscalização de políticas públicas, além de atuar como voluntária em ações sociais desde 2017.
                            </p>
                            <p>
                                Empreendedora desde 2022, é proprietária da empresa <strong>Merylin Bento (MEI)</strong>, especializada em treinamento e desenvolvimento profissional e gerencial, integrando oficialmente essa atuação ao Instituto Atomus em 2026.
                            </p>

                            <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--bg-light)', borderLeft: '4px solid var(--brand-gold)', borderRadius: '0 8px 8px 0' }}>
                                <p style={{ fontStyle: 'italic', fontSize: '1.2rem', margin: 0, color: 'var(--text-secondary)' }}>
                                    "Com uma abordagem que une técnica, sensibilidade e visão estratégica, acredito que <strong>empresas saudáveis são construídas por pessoas emocionalmente fortalecidas</strong>."
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <footer className="footer" style={{ marginTop: '4rem' }}>
                <div className="container text-center">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                        <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} ATOMUS Instituto de Desenvolvimento Empresarial.</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.7 }}>
                            <span style={{ fontSize: '0.8rem' }}>Desenvolvido por</span>
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

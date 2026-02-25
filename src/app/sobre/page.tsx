import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sobre a ATOMUS | Instituto de Desenvolvimento Empresarial',
};

export default function SobrePage() {
    return (
        <main>

            {/* Hero */}
            <section className="section section-dark" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
                <div className="container text-center animate-fade-in-up">
                    <div className="divider" style={{ margin: '0 auto 2rem' }}></div>
                    <h1>Posicionamento & Manifesto</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem' }}>
                        Não somos um grupo de teóricos. Somos construtores de bases governamentais corporativas.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container grid" style={{ gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '4rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem' }}>Fundamentos</h2>
                        <div className="divider"></div>
                    </div>
                    <div className="grid" style={{ gap: '3rem' }}>
                        <article>
                            <h3 className="text-gold">Propósito</h3>
                            <p>Erradicar o amadorismo e a gestão emocional. Nosso alvo é entregar ferramentas de racionalização empresarial para líderes que desejam comandar equipes com alta performance estrutural.</p>
                        </article>

                        <article>
                            <h3 className="text-gold">Missão</h3>
                            <p>Fornecer conhecimento tático e consultoria estratégica que permita empresas organizarem sua cultura, liderança e processos, crescendo com lucidez e comando claro.</p>
                        </article>

                        <article>
                            <h3 className="text-gold">Visão</h3>
                            <p>Tornar-se a maior referência nacional em metodologias de desenvolvimento empresarial baseadas na ordem, racionalidade e construção deliberada de culturas corporativas vencedoras.</p>
                        </article>

                        <article>
                            <h3 className="text-gold">Valores</h3>
                            <ul style={{ listStyle: 'none', paddingLeft: '1rem', borderLeft: '3px solid var(--brand-gold)' }}>
                                <li><strong>Razão e Lógica:</strong> Não permitimos que emoções ditem as regras do negócio.</li>
                                <li><strong>Comando e Firmeza:</strong> Onde há ordem, há previsibilidade.</li>
                                <li><strong>Excelência Vertical:</strong> Fazer bem feito do topo à base.</li>
                                <li><strong>Foco em Resultados:</strong> A teoria serve à prática. Se a teoria falha, descartamos a teoria.</li>
                            </ul>
                        </article>

                        <article style={{ marginTop: '2rem', padding: '2rem', border: '1px solid var(--brand-gold-dark)', borderRadius: '4px' }}>
                            <h3>O Manifesto ATOMUS</h3>
                            <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                                "Onde falta estrutura, nasce o caos. Onde não há liderança forte, grupos sucumbem ao instinto de sobrevivência primário, criando disputas infundadas. A empresa não existe para acolher; ela existe para produzir e entregar valor imensurável perante a sociedade, gerando capital. O papel do líder é manter esse motor funcionando com as melhores peças. Nós forjamos essas peças e blindamos esse motor."
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* Footer Reuse */}
            <footer className="footer" style={{ marginTop: '4rem' }}>
                <div className="container text-center">
                    <p>&copy; {new Date().getFullYear()} ATOMUS Instituto de Desenvolvimento Empresarial.</p>
                </div>
            </footer>
        </main>
    );
}

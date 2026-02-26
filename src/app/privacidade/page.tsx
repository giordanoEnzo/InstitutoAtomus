import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Política de Privacidade e Cookies | ATOMUS',
};

export default function PrivacidadePage() {
    return (
        <main>

            <section className="section section-dark" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
                <div className="container text-center animate-fade-in-up">
                    <div className="divider" style={{ margin: '0 auto 2rem' }}></div>
                    <h1>Política de Privacidade e Cookies</h1>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <article>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Compromisso com a Proteção de Dados</h2>
                        <p>
                            Em conformidade com a Lei Geral de Proteção de Dados (LGPD), esta política decreta como o Instituto de Desenvolvimento Empresarial ATOMUS processa os dados de seus usuários e clientes.
                        </p>

                        <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--brand-gold-dark)' }}>1. Coleta e Uso de Dados</h3>
                        <p>
                            Coletamos informações durante o cadastro de leads (nome, empresa, cargo, e-mail, telefone), envio de formulários e download de e-books. Estas informações são estritamente para contato corporativo e estratégia comercial da ATOMUS. Nunca comercializamos seus dados.
                        </p>

                        <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--brand-gold-dark)' }}>2. Sensores Técnicos e Analytics Interno</h3>
                        <p>
                            Nosso sistema utiliza rastreamento próprio (sensores analíticos) para identificar comportamento de navegação: tempo em página, elementos clicados, origens de tráfego, sessões e conversões. Isso existe para refinar a inteligência e eficácia do site. Os dados são armazenados localmente e processados apenas internamente.
                        </p>

                        <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--brand-gold-dark)' }}>3. Armazenamento e Segurança</h3>
                        <p>
                            Armazenamos seus dados em banco de dados isolado com criptografia para credenciais. Apenas diretores e administradores designados do Instituto ATOMUS possuem acesso. O tempo de retenção é o período necessário para as finalidades para as quais foram coletados.
                        </p>

                        <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--brand-gold-dark)' }}>4. Uso de Cookies</h3>
                        <p>
                            Utilizamos cookies estritamente necessários para manter sua sessão, bem como cookies analíticos para monitoramento de comportamento através dos nossos Sensores Internos. Ao continuar no site, você consente com este uso tático de dados.
                        </p>

                        <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--brand-gold-dark)' }}>5. Direitos do Titular</h3>
                        <p>
                            A qualquer momento você pode solicitar a exibição, retificação ou exclusão dos seus dados corporativos presentes em nossa base enviando um e-mail para dpo@institutoatomus.com.br.
                        </p>
                    </article>
                </div>
            </section>

            {/* Footer Reuse */}
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

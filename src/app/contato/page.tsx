import { captureLead } from '../admin/actions';

export default async function ContatoPage(props: { searchParams: Promise<{ sucesso?: string }> }) {
    const searchParams = await props.searchParams;
    return (
        <main>
            <section className="section section-dark" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
                <div className="container text-center">
                    <div className="divider" style={{ margin: '0 auto 2rem' }}></div>
                    <h1>Solicitar Contato Especializado</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto' }}>A arquitetura da sua empresa não pode esperar. Entre em contato para agendar uma sessão de alinhamento com nossos especialistas em desenvolvimento institucional.</p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>

                    {searchParams.sucesso && (
                        <div style={{ padding: '1.5rem', backgroundColor: '#d4edda', color: '#155724', borderRadius: '4px', marginBottom: '2rem', textAlign: 'center', fontWeight: 'bold' }}>
                            Solicitação enviada com sucesso! Nossa equipe entrará em contato em breve.
                        </div>
                    )}

                    <form action={captureLead} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', backgroundColor: 'var(--bg-primary)', padding: '3rem', borderRadius: '4px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>

                        <input type="hidden" name="source" value="Página de Contato" />

                        <div className="grid grid-2">
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Nome Completo *</label>
                                <input name="name" required type="text" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>E-mail Corporativo *</label>
                                <input name="email" required type="email" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                            </div>
                        </div>

                        <div className="grid grid-2">
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Nome da Empresa *</label>
                                <input name="company" required type="text" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Seu Cargo</label>
                                <input name="position" type="text" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Telefone / WhatsApp *</label>
                            <input name="phone" required type="tel" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1rem' }}>
                            ENVIAR SOLICITAÇÃO DE CONTATO
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer Reuse */}
            <footer className="footer" style={{ marginTop: '0' }}>
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

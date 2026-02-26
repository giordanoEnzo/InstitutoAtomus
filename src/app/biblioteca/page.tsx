import prisma from '@/lib/prisma';
import Link from 'next/link';

export const metadata = {
    title: 'Biblioteca de E-books | ATOMUS',
};

export default async function BibliotecaPage() {
    const ebooks = await prisma.ebook.findMany({
        orderBy: { createdAt: 'desc' },
    });

    return (
        <main>

            <section className="section section-dark" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
                <div className="container text-center animate-fade-in-up">
                    <div className="divider" style={{ margin: '0 auto 2rem' }}></div>
                    <h1>Biblioteca Estratégica</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem' }}>
                        Acesso ao arsenal teórico e estratégico da ATOMUS. Estrutura pura para gestores exigentes.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {ebooks.length === 0 ? (
                        <div className="text-center" style={{ padding: '4rem 0' }}>
                            <h2>Acervo sendo catalogado</h2>
                            <p>Nossos e-books e materiais estão passando por revisão no momento.</p>
                        </div>
                    ) : (
                        <div className="grid grid-3" style={{ gap: '3rem' }}>
                            {ebooks.map((ebook: any) => (
                                <div key={ebook.id} className="card-hover" style={{ border: '1px solid var(--bg-secondary)', padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%', borderRadius: '4px' }}>
                                    {ebook.coverUrl ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img src={ebook.coverUrl} alt={ebook.title} style={{ width: '100%', height: 'auto', marginBottom: '1.5rem', border: '1px solid var(--text-light)' }} />
                                    ) : (
                                        <div style={{ backgroundColor: 'var(--bg-secondary)', width: '100%', aspectRatio: '3/4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                            <span style={{ color: 'var(--bg-dark)', fontWeight: 'bold' }}>{ebook.title}</span>
                                        </div>
                                    )}
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{ebook.title}</h3>
                                    <p style={{ flex: 1, fontSize: '0.9rem' }}>{ebook.description}</p>
                                    <Link href={`/biblioteca/download/${ebook.id}`} className="btn btn-secondary" style={{ padding: '0.8rem 1rem', fontSize: '0.8rem', width: '100%', textAlign: 'center', marginTop: '1rem' }}>
                                        ACESSAR / BAIXAR
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
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

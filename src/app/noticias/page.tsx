import prisma from '@/lib/prisma';
import Link from 'next/link';

export const metadata = {
    title: 'Notícias e Artigos | ATOMUS',
};

export default async function NoticiasPage() {
    const news = await prisma.news.findMany({
        orderBy: { createdAt: 'desc' },
    });

    return (
        <main>

            <section className="section section-dark" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
                <div className="container text-center animate-fade-in-up">
                    <div className="divider" style={{ margin: '0 auto 2rem' }}></div>
                    <h1>Notícias & Artigos</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem' }}>
                        Atualizações essenciais, análises estratégicas e artigos sobre desenvolvimento corporativo.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {news.length === 0 ? (
                        <div className="text-center" style={{ padding: '4rem 0' }}>
                            <h2>Não há publicações no momento</h2>
                            <p>Volte mais tarde para novas análises e notícias.</p>
                        </div>
                    ) : (
                        <div className="grid grid-2" style={{ gap: '2rem' }}>
                            {news.map((item: any) => (
                                <article key={item.id} className="card-hover" style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--bg-secondary)', borderRadius: '4px', overflow: 'hidden' }}>
                                    {item.imageUrl && (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img src={item.imageUrl} alt={item.title} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                                    )}
                                    <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <small style={{ color: 'var(--brand-gold-dark)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '1rem' }}>
                                            {new Date(item.publishedAt || item.createdAt).toLocaleDateString('pt-BR')}
                                            {item.author && ` • POR ${item.author}`}
                                        </small>
                                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item.title}</h2>
                                        <p style={{ flex: 1, fontSize: '1rem' }}>{item.subtitle || item.metaDesc}</p>
                                        <Link href={`/noticias/${item.id}`} className="text-gold" style={{ marginTop: '1rem', fontWeight: 'bold' }}>
                                            LER ARTIGO &rarr;
                                        </Link>
                                    </div>
                                </article>
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

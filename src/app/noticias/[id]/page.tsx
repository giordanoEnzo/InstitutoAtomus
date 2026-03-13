import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import FooterMain from '@/components/FooterMain';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export async function generateMetadata(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = parseInt(params.id, 10);
    const item = await prisma.news.findUnique({ where: { id } });
    
    if (!item) return { title: 'Notícia não encontrada' };
    
    return {
        title: `${item.title} | ATOMUS`,
        description: item.metaDesc || item.subtitle,
    };
}

export default async function NoticiaDetalhePage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = parseInt(params.id, 10);

    if (isNaN(id)) return notFound();

    const item = await prisma.news.findUnique({
        where: { id }
    });

    if (!item) return notFound();

    return (
        <main>
            <section className="section" style={{ paddingTop: '10rem' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <Link href="/noticias" style={{ color: 'var(--brand-gold-dark)', fontWeight: 'bold', marginBottom: '2rem', display: 'inline-block' }}>
                        &larr; VOLTAR PARA NOTÍCIAS
                    </Link>
                    
                    <div style={{ marginBottom: '3rem' }}>
                        <small style={{ color: 'var(--brand-gold-dark)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                            {new Date(item.publishedAt || item.createdAt).toLocaleDateString('pt-BR')}
                            {item.author && ` • POR ${item.author}`}
                        </small>
                        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginTop: '1rem', lineHeight: '1.2' }}>{item.title}</h1>
                        {item.subtitle && <p style={{ fontSize: '1.25rem', color: '#666', marginTop: '1.5rem', fontStyle: 'italic' }}>{item.subtitle}</p>}
                    </div>

                    {item.imageUrl && (
                        <div style={{ marginBottom: '3rem', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                            <img src={item.imageUrl} alt={item.title} style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }} />
                        </div>
                    )}

                    <div 
                        className="news-content"
                        style={{ fontSize: '1.125rem', lineHeight: '1.8' }}
                        dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                </div>
            </section>
            
            <FooterMain />
        </main>
    );
}

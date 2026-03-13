import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import FooterMain from '@/components/FooterMain';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function DownloadEbookPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = parseInt(params.id, 10);

    if (isNaN(id)) return notFound();

    const ebook = await prisma.ebook.findUnique({
        where: { id }
    });

    if (!ebook) return notFound();

    return (
        <main>
            <section className="section" style={{ paddingTop: '10rem' }}>
                <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                    <Link href="/biblioteca" style={{ color: 'var(--brand-gold-dark)', fontWeight: 'bold', marginBottom: '2rem', display: 'inline-block' }}>
                        &larr; VOLTAR PARA BIBLIOTECA
                    </Link>
                    
                    <div style={{ background: 'var(--bg-primary)', padding: '3rem', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid var(--bg-secondary)' }}>
                        {ebook.coverUrl && (
                            <img src={ebook.coverUrl} alt={ebook.title} style={{ width: '200px', margin: '0 auto 2rem', border: '1px solid #eee', display: 'block' }} />
                        )}
                        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{ebook.title}</h1>
                        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>{ebook.description}</p>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                            <a href={ebook.fileUrl} download className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                                BAIXAR ARQUIVO (PDF)
                            </a>
                            <p style={{ fontSize: '0.8rem', color: '#999' }}>O download iniciará automaticamente se o arquivo estiver disponível.</p>
                        </div>
                    </div>
                </div>
            </section>
            <FooterMain />
        </main>
    );
}

import prisma from '@/lib/prisma';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
    const page = await prisma.page.findUnique({ where: { slug: 'merilyn-bento' } });
    return {
        title: page ? 'Merilyn Bento | Especialista' : 'Merilyn Bento | ATOMUS',
    };
}

export default async function MerilynBentoPage() {
    const page = await prisma.page.findUnique({ where: { slug: 'merilyn-bento' } });

    return (
        <main>

            {/* Hero */}
            <section className="section section-dark" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
                <div className="container text-center animate-fade-in-up">
                    <div className="divider" style={{ margin: '0 auto 2rem' }}></div>
                    <h1>Merilyn Bento</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', color: 'var(--brand-gold)' }}>
                        Liderança e Estratégia Corporativa
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {page ? (
                        <div dangerouslySetInnerHTML={{ __html: page.content }} className="rich-text-content" />
                    ) : (
                        <div className="text-center" style={{ padding: '4rem 0' }}>
                            <h2 style={{ color: 'var(--text-secondary)' }}>Conteúdo em construção</h2>
                            <p>A página da especialista está sendo atualizada.</p>
                        </div>
                    )}
                </div>
            </section>

            <footer className="footer" style={{ marginTop: '4rem' }}>
                <div className="container text-center">
                    <p>&copy; {new Date().getFullYear()} ATOMUS Instituto de Desenvolvimento Empresarial.</p>
                </div>
            </footer>
        </main>
    );
}

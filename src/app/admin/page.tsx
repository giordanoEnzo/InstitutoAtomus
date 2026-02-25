import prisma from '@/lib/prisma';

export default async function AdminDashboardPage() {
    const leadsCount = await prisma.lead.count();
    const newsCount = await prisma.news.count();
    const ebooksCount = await prisma.ebook.count();

    return (
        <>
            <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Painel de Comando</h1>
            <div className="grid grid-3" style={{ gap: '2rem' }}>
                <div style={{ padding: '2rem', backgroundColor: 'var(--bg-primary)', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>Leads Captados</h3>
                    <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--brand-gold)' }}>{leadsCount}</p>
                </div>
                <div style={{ padding: '2rem', backgroundColor: 'var(--bg-primary)', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>Artigos e Notícias</h3>
                    <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--brand-gold)' }}>{newsCount}</p>
                </div>
                <div style={{ padding: '2rem', backgroundColor: 'var(--bg-primary)', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>E-books</h3>
                    <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--brand-gold)' }}>{ebooksCount}</p>
                </div>
            </div>
        </>
    );
}

import prisma from '@/lib/prisma';

export default async function AnalyticsAdminPage() {
    const totalEvents = await prisma.analyticsEvent.count();

    // Grouping by path (basic pageview count approximation)
    const topPages = await prisma.analyticsEvent.groupBy({
        by: ['path'],
        _count: { path: true },
        orderBy: { _count: { path: 'desc' } },
        take: 5
    });

    const devices = await prisma.analyticsEvent.groupBy({
        by: ['device'],
        _count: { device: true },
        orderBy: { _count: { device: 'desc' } },
        take: 5
    });

    const avgTimePerPage = await prisma.analyticsEvent.groupBy({
        by: ['path'],
        _avg: { duration: true },
        where: { eventType: 'time_on_page' },
        orderBy: { _avg: { duration: 'desc' } },
        take: 5
    });

    return (
        <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Central de Sensores Analytics</h1>
            <p style={{ marginBottom: '2rem' }}>Eventos rastreados totais: <strong>{totalEvents}</strong></p>

            <div className="grid grid-3" style={{ gap: '2rem' }}>
                <div style={{ backgroundColor: 'var(--bg-primary)', padding: '2rem', borderRadius: '4px', border: '1px solid #ddd', minHeight: '300px' }}>
                    <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem' }}>Páginas Mais Acessadas</h3>
                    {topPages.length === 0 ? (
                        <p style={{ color: 'var(--text-secondary)' }}>Aguardando coleta de dados.</p>
                    ) : (
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {topPages.map((page, idx) => (
                                <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #eee' }}>
                                    <span>{page.path}</span>
                                    <strong className="text-gold">{page._count.path} cliques/visitas</strong>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div style={{ backgroundColor: 'var(--bg-primary)', padding: '2rem', borderRadius: '4px', border: '1px solid #ddd', minHeight: '300px' }}>
                    <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem' }}>Dispositivos Acessados</h3>
                    {devices.length === 0 ? (
                        <p style={{ color: 'var(--text-secondary)' }}>Aguardando coleta de dados.</p>
                    ) : (
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {devices.map((dev, idx) => (
                                <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #eee' }}>
                                    <span style={{ textTransform: 'capitalize' }}>{dev.device || 'Desconhecido'}</span>
                                    <strong className="text-gold">{dev._count.device} acessos</strong>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div style={{ backgroundColor: 'var(--bg-primary)', padding: '2rem', borderRadius: '4px', border: '1px solid #ddd', minHeight: '300px' }}>
                    <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem' }}>Tempo Médio na Tela</h3>
                    {avgTimePerPage.length === 0 ? (
                        <p style={{ color: 'var(--text-secondary)' }}>Aguardando interação prolongada.</p>
                    ) : (
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {avgTimePerPage.map((page, idx) => (
                                <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #eee' }}>
                                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '150px' }}>{page.path}</span>
                                    <strong className="text-gold">{Math.round(page._avg.duration || 0)}s</strong>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

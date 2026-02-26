import prisma from '@/lib/prisma';
import Link from 'next/link';
import DeleteButton from '@/components/DeleteButton';
import Pagination from '@/components/Pagination';
import { deleteNews } from '../actions';

export default async function NoticiasAdminPage(props: { searchParams: Promise<{ page?: string }> }) {
    const searchParams = await props.searchParams;
    const pageNumber = parseInt(searchParams.page || '1', 10) || 1;
    const itemsPerPage = 8;

    const [news, totalCount] = await Promise.all([
        prisma.news.findMany({
            orderBy: { createdAt: 'desc' },
            skip: (pageNumber - 1) * itemsPerPage,
            take: itemsPerPage,
        }),
        prisma.news.count()
    ]);

    const totalPages = Math.ceil(totalCount / itemsPerPage);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem' }}>Gestão de Notícias e Artigos</h1>
                <Link href="/admin/noticias/nova" className="btn btn-primary" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>+ NOVA PUBLICAÇÃO</Link>
            </div>

            <div style={{ overflowX: 'auto', width: '100%', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', backgroundColor: 'var(--bg-primary)' }}>
                    <thead>
                        <tr style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-white)' }}>
                            <th style={{ padding: '1rem' }}>Título</th>
                            <th style={{ padding: '1rem' }}>Autor</th>
                            <th style={{ padding: '1rem' }}>Publicação</th>
                            <th style={{ padding: '1rem', width: '100px', textAlign: 'center' }}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {news.length === 0 ? (
                            <tr>
                                <td colSpan={4} style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>Nenhuma publicação cadastrada.</td>
                            </tr>
                        ) : news.map((item: any) => (
                            <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
                                <td style={{ padding: '1rem' }}>{item.title}</td>
                                <td style={{ padding: '1rem' }}>{item.author || '-'}</td>
                                <td style={{ padding: '1rem' }}>{new Date(item.createdAt).toLocaleDateString('pt-BR')}</td>
                                <td style={{ padding: '1rem', textAlign: 'center' }}>
                                    <DeleteButton id={item.id} onDelete={deleteNews} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Pagination currentPage={pageNumber} totalPages={totalPages} basePath="/admin/noticias" />
        </div>
    );
}

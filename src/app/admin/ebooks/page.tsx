import prisma from '@/lib/prisma';
import Link from 'next/link';
import DeleteButton from '@/components/DeleteButton';
import Pagination from '@/components/Pagination';
import { deleteEbook } from '../actions';

export default async function EbooksAdminPage({ searchParams }: { searchParams: { page?: string } }) {
    const pageNumber = parseInt(searchParams.page || '1', 10) || 1;
    const itemsPerPage = 8;

    const [ebooks, totalCount] = await Promise.all([
        prisma.ebook.findMany({
            orderBy: { createdAt: 'desc' },
            skip: (pageNumber - 1) * itemsPerPage,
            take: itemsPerPage,
        }),
        prisma.ebook.count()
    ]);

    const totalPages = Math.ceil(totalCount / itemsPerPage);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem' }}>Gestão de E-books</h1>
                <Link href="/admin/ebooks/novo" className="btn btn-primary" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>+ NOVO E-BOOK</Link>
            </div>

            <div style={{ overflowX: 'auto', width: '100%', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', backgroundColor: 'var(--bg-primary)' }}>
                    <thead>
                        <tr style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-white)' }}>
                            <th style={{ padding: '1rem' }}>Título</th>
                            <th style={{ padding: '1rem' }}>Data</th>
                            <th style={{ padding: '1rem', width: '100px', textAlign: 'center' }}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ebooks.length === 0 ? (
                            <tr>
                                <td colSpan={3} style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>Nenhum e-book cadastrado.</td>
                            </tr>
                        ) : ebooks.map((ebook: any) => (
                            <tr key={ebook.id} style={{ borderBottom: '1px solid #ddd' }}>
                                <td style={{ padding: '1rem' }}>{ebook.title}</td>
                                <td style={{ padding: '1rem' }}>{new Date(ebook.createdAt).toLocaleDateString('pt-BR')}</td>
                                <td style={{ padding: '1rem', textAlign: 'center' }}>
                                    <DeleteButton id={ebook.id} onDelete={deleteEbook} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Pagination currentPage={pageNumber} totalPages={totalPages} basePath="/admin/ebooks" />
        </div>
    );
}

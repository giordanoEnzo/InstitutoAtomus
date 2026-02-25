import prisma from '@/lib/prisma';
import DeleteButton from '@/components/DeleteButton';
import Pagination from '@/components/Pagination';
import { deleteLead } from '../actions';

export default async function LeadsAdminPage({ searchParams }: { searchParams: { page?: string } }) {
    const pageNumber = parseInt(searchParams.page || '1', 10) || 1;
    const itemsPerPage = 8;

    const [leads, totalCount] = await Promise.all([
        prisma.lead.findMany({
            orderBy: { createdAt: 'desc' },
            skip: (pageNumber - 1) * itemsPerPage,
            take: itemsPerPage,
        }),
        prisma.lead.count()
    ]);

    const totalPages = Math.ceil(totalCount / itemsPerPage);

    return (
        <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Gestão de Leads</h1>
            <div style={{ overflowX: 'auto', width: '100%', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', backgroundColor: 'var(--bg-primary)' }}>
                    <thead>
                        <tr style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-white)' }}>
                            <th style={{ padding: '1rem' }}>Data</th>
                            <th style={{ padding: '1rem' }}>Nome Completo</th>
                            <th style={{ padding: '1rem' }}>Empresa & Cargo</th>
                            <th style={{ padding: '1rem' }}>E-mail corporativo</th>
                            <th style={{ padding: '1rem' }}>Telefone</th>
                            <th style={{ padding: '1rem' }}>Origem</th>
                            <th style={{ padding: '1rem', width: '100px', textAlign: 'center' }}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leads.length === 0 ? (
                            <tr>
                                <td colSpan={7} style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>Nenhum lead captado ainda.</td>
                            </tr>
                        ) : leads.map((lead: any) => (
                            <tr key={lead.id} style={{ borderBottom: '1px solid #ddd' }}>
                                <td style={{ padding: '1rem' }}>{new Date(lead.createdAt).toLocaleDateString('pt-BR')}</td>
                                <td style={{ padding: '1rem', fontWeight: 'bold' }}>{lead.name}</td>
                                <td style={{ padding: '1rem' }}>{lead.company || '-'} <br /> <small style={{ color: 'var(--text-secondary)' }}>{lead.position || '-'}</small></td>
                                <td style={{ padding: '1rem' }}>{lead.email}</td>
                                <td style={{ padding: '1rem' }}>{lead.phone || '-'}</td>
                                <td style={{ padding: '1rem', color: 'var(--brand-gold-dark)' }}>{lead.source || '-'}</td>
                                <td style={{ padding: '1rem', textAlign: 'center' }}>
                                    <DeleteButton id={lead.id} onDelete={deleteLead} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Pagination currentPage={pageNumber} totalPages={totalPages} basePath="/admin/leads" />
        </div>
    );
}

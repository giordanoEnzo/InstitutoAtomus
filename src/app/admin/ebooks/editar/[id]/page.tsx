import prisma from '@/lib/prisma';
import { updateEbook } from '../../../actions';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function EditarEbookPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = parseInt(params.id, 10);

    if (isNaN(id)) {
        return notFound();
    }

    const item = await prisma.ebook.findUnique({
        where: { id }
    });

    if (!item) {
        return notFound();
    }

    return (
        <div style={{ maxWidth: '800px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem' }}>Editar E-book</h1>
                <Link href="/admin/ebooks" style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}>Voltar</Link>
            </div>

            <form action={updateEbook} encType="multipart/form-data" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', backgroundColor: 'var(--bg-primary)', padding: '2rem', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <input type="hidden" name="id" value={item.id} />
                
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Título</label>
                    <input name="title" defaultValue={item.title} required type="text" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Descrição (Exibida na biblioteca)</label>
                    <textarea name="description" defaultValue={item.description || ''} rows={4} style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px', resize: 'vertical' }}></textarea>
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Capa do E-book (Upload - deixe em branco para manter)</label>
                    {item.coverUrl && (
                        <div style={{ marginBottom: '1rem' }}>
                            <p style={{ fontSize: '0.8rem', color: '#666' }}>Capa atual:</p>
                            <img src={item.coverUrl} alt="Atual" style={{ height: '100px', borderRadius: '4px' }} />
                        </div>
                    )}
                    <input name="cover" type="file" accept="image/*" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#fff', cursor: 'pointer' }} />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Arquivo do E-book (PDF/etc - deixe em branco para manter)</label>
                    {item.fileUrl && (
                        <div style={{ marginBottom: '1rem' }}>
                            <p style={{ fontSize: '0.8rem', color: '#666' }}>Arquivo atual: <span style={{ color: 'var(--brand-gold-dark)' }}>{item.fileUrl}</span></p>
                        </div>
                    )}
                    <input name="file" type="file" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#fff', cursor: 'pointer' }} />
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1rem' }}>SALVAR ALTERAÇÕES</button>
            </form>
        </div>
    );
}

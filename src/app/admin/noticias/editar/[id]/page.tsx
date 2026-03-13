import prisma from '@/lib/prisma';
import { updateNews } from '../../../actions';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function EditarNoticiaPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = parseInt(params.id, 10);

    if (isNaN(id)) {
        return notFound();
    }

    const item = await prisma.news.findUnique({
        where: { id }
    });

    if (!item) {
        return notFound();
    }

    return (
        <div style={{ maxWidth: '800px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem' }}>Editar Publicação</h1>
                <Link href="/admin/noticias" style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}>Voltar</Link>
            </div>

            <form action={updateNews} encType="multipart/form-data" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', backgroundColor: 'var(--bg-primary)', padding: '2rem', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <input type="hidden" name="id" value={item.id} />
                
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Título</label>
                    <input name="title" defaultValue={item.title} required type="text" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Subtítulo (Opcional)</label>
                    <input name="subtitle" defaultValue={item.subtitle || ''} type="text" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Autor</label>
                    <input name="author" defaultValue={item.author || ''} type="text" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Imagem de Capa (Deixe em branco para manter a atual)</label>
                    {item.imageUrl && (
                        <div style={{ marginBottom: '1rem' }}>
                            <p style={{ fontSize: '0.8rem', color: '#666' }}>Imagem atual:</p>
                            <img src={item.imageUrl} alt="Atual" style={{ height: '100px', borderRadius: '4px' }} />
                        </div>
                    )}
                    <input name="image" type="file" accept="image/*" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#fff', cursor: 'pointer' }} />
                </div>

                <div className="grid grid-2">
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Data de Publicação (Opcional)</label>
                        <input name="publishedAt" defaultValue={item.publishedAt ? new Date(item.publishedAt).toISOString().split('T')[0] : ''} type="date" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Descrição Curta (SEO)</label>
                        <input name="metaDesc" defaultValue={item.metaDesc || ''} type="text" placeholder="Breve resumo para o Google" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                    </div>
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Conteúdo (HTML/Texto)</label>
                    <textarea name="content" defaultValue={item.content} required rows={15} style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px', resize: 'vertical' }}></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1rem' }}>SALVAR ALTERAÇÕES</button>
            </form>
        </div>
    );
}

import prisma from '@/lib/prisma';
import { updateMerilynPage } from '../actions';

export default async function MerilynBentoAdminPage() {
    const page = await prisma.page.findUnique({ where: { slug: 'merilyn-bento' } });

    return (
        <div style={{ maxWidth: '800px' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Página Merilyn Bento</h1>
            <p style={{ marginBottom: '2rem' }}>Nesta sessão você pode atualizar os textos e atributos da página biográfica. (Integração WYSIWYG em breve, suporta tags HTML básicas).</p>

            <form action={updateMerilynPage} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', backgroundColor: 'var(--bg-primary)', padding: '2rem', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Conteúdo da Página</label>
                    <textarea
                        name="content"
                        required
                        rows={20}
                        defaultValue={page?.content || ''}
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px', resize: 'vertical' }}
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1rem' }}>ATUALIZAR PÁGINA</button>
            </form>
        </div>
    );
}

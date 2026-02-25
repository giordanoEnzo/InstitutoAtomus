import { createNews } from '../../actions';

export default function NovaNoticiaPage() {
    return (
        <div style={{ maxWidth: '800px' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Criar Nova Publicação</h1>

            <form action={createNews} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', backgroundColor: 'var(--bg-primary)', padding: '2rem', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Título</label>
                    <input name="title" required type="text" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Subtítulo (Opcional)</label>
                    <input name="subtitle" type="text" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Autor</label>
                    <input name="author" type="text" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>URL da Imagem de Capa</label>
                    <input name="imageUrl" type="url" placeholder="Ex: https://dominio.com/foto.jpg" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Conteúdo (HTML/Texto)</label>
                    <textarea name="content" required rows={10} style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px', resize: 'vertical' }}></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1rem' }}>PUBLICAR NOTÍCIA</button>
            </form>
        </div>
    );
}

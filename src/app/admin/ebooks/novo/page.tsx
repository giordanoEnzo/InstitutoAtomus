import { createEbook } from '../../actions';

export default function NovoEbookPage() {
    return (
        <div style={{ maxWidth: '800px' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Cadastro de Novo E-book</h1>

            <form action={createEbook} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', backgroundColor: 'var(--bg-primary)', padding: '2rem', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Título do E-book</label>
                    <input name="title" required type="text" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Breve Descrição</label>
                    <input name="description" type="text" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>URL da Imagem da Capa</label>
                    <input name="coverUrl" required type="url" placeholder="https://dominio.com/capa.jpg" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>URL do Arquivo (PDF Ex: Google Drive/S3)</label>
                    <input name="fileUrl" required type="url" placeholder="https://dominio.com/ebook.pdf" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1rem' }}>CADASTRAR E-BOOK</button>
            </form>
        </div>
    );
}

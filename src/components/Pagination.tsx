import Link from 'next/link';

export default function Pagination({
    currentPage,
    totalPages,
    basePath
}: {
    currentPage: number;
    totalPages: number;
    basePath: string;
}) {
    if (totalPages <= 1) return null;

    const prevPage = currentPage > 1 ? currentPage - 1 : 1;
    const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages;

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
            <Link
                href={`${basePath}?page=${prevPage}`}
                className="btn btn-secondary"
                style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', pointerEvents: currentPage === 1 ? 'none' : 'auto', opacity: currentPage === 1 ? 0.5 : 1 }}
            >
                &laquo; Anterior
            </Link>

            <span style={{ fontWeight: 'bold' }}>
                Página {currentPage} de {totalPages}
            </span>

            <Link
                href={`${basePath}?page=${nextPage}`}
                className="btn btn-secondary"
                style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', pointerEvents: currentPage === totalPages ? 'none' : 'auto', opacity: currentPage === totalPages ? 0.5 : 1 }}
            >
                Próxima &raquo;
            </Link>
        </div>
    );
}

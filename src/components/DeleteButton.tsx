'use client';

import { useTransition } from 'react';

export default function DeleteButton({ id, onDelete }: { id: number, onDelete: (id: number) => Promise<void> }) {
    const [isPending, startTransition] = useTransition();

    return (
        <button
            onClick={() => {
                if (confirm('Tem certeza que deseja excluir?')) {
                    startTransition(() => onDelete(id));
                }
            }}
            disabled={isPending}
            style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: isPending ? 'not-allowed' : 'pointer',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                opacity: isPending ? 0.7 : 1
            }}
        >
            {isPending ? 'Excluindo...' : 'X'}
        </button>
    );
}

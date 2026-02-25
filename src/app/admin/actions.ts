'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createNews(formData: FormData) {
    const title = formData.get('title') as string;
    const subtitle = formData.get('subtitle') as string;
    const content = formData.get('content') as string;
    const author = formData.get('author') as string;
    const imageUrl = formData.get('imageUrl') as string;

    await prisma.news.create({
        data: {
            title,
            subtitle,
            content,
            author,
            imageUrl,
        }
    });

    revalidatePath('/admin/noticias');
    revalidatePath('/noticias');
    redirect('/admin/noticias');
}

export async function deleteNews(id: number) {
    await prisma.news.delete({
        where: { id }
    });
    revalidatePath('/admin/noticias');
    revalidatePath('/noticias');
}

export async function createEbook(formData: FormData) {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const coverUrl = formData.get('coverUrl') as string;
    const fileUrl = formData.get('fileUrl') as string;

    await prisma.ebook.create({
        data: {
            title,
            description,
            coverUrl,
            fileUrl,
        }
    });

    revalidatePath('/admin/ebooks');
    revalidatePath('/biblioteca');
    redirect('/admin/ebooks');
}

export async function deleteEbook(id: number) {
    await prisma.ebook.delete({
        where: { id }
    });
    revalidatePath('/admin/ebooks');
    revalidatePath('/biblioteca');
}

export async function updateMerilynPage(formData: FormData) {
    const content = formData.get('content') as string;

    await prisma.page.upsert({
        where: { slug: 'merilyn-bento' },
        update: { content },
        create: { slug: 'merilyn-bento', content }
    });

    revalidatePath('/admin/merilyn-bento');
    revalidatePath('/merilyn-bento');
}

export async function captureLead(formData: FormData) {
    const name = formData.get('name') as string;
    const company = formData.get('company') as string;
    const position = formData.get('position') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const source = formData.get('source') as string || 'Página de Contato';

    await prisma.lead.create({
        data: {
            name,
            company,
            position,
            phone,
            email,
            source
        }
    });

    revalidatePath('/admin/leads');
    redirect('/contato?sucesso=true');
}

export async function deleteLead(id: number) {
    await prisma.lead.delete({
        where: { id }
    });
    revalidatePath('/admin/leads');
}

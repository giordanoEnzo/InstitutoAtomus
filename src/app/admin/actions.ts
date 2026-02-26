'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import fs from 'fs';
import path from 'path';

export async function createNews(formData: FormData) {
    const title = formData.get('title') as string;
    const subtitle = formData.get('subtitle') as string;
    const content = formData.get('content') as string;
    const author = formData.get('author') as string;

    let imageUrl = '';
    const image = formData.get('image') as File | null;

    if (image && image.name) {
        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const fileName = `${Date.now()}-${image.name.replace(/[^a-zA-Z0-9.\-_]/g, '')}`;
        const filePath = path.join(process.cwd(), 'public/uploads', fileName);
        fs.writeFileSync(filePath, buffer);
        imageUrl = `/uploads/${fileName}`;
    }

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

    let coverUrl = '';
    const cover = formData.get('cover') as File | null;
    if (cover && cover.name) {
        const bytes = await cover.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const fileName = `${Date.now()}-cover-${cover.name.replace(/[^a-zA-Z0-9.\-_]/g, '')}`;
        const filePath = path.join(process.cwd(), 'public/uploads', fileName);
        fs.writeFileSync(filePath, buffer);
        coverUrl = `/uploads/${fileName}`;
    }

    let fileUrl = '';
    const file = formData.get('file') as File | null;
    if (file && file.name) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const fileName = `${Date.now()}-file-${file.name.replace(/[^a-zA-Z0-9.\-_]/g, '')}`;
        const filePath = path.join(process.cwd(), 'public/uploads', fileName);
        fs.writeFileSync(filePath, buffer);
        fileUrl = `/uploads/${fileName}`;
    }

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

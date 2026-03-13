import { PrismaClient } from '@prisma/client'
import path from 'path'

const prismaClientSingleton = () => {
  // For SQLite in Next.js, absolute paths are most reliable.
  // We build it relative to the process root at runtime.
  const dbPath = path.join(process.cwd(), 'prisma', 'dev.db')
  
  return new PrismaClient({
    datasources: {
      db: {
        url: `file:${dbPath}`
      }
    }
  })
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

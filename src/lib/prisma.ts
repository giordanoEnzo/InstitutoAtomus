import { PrismaClient } from '@prisma/client'
import path from 'path'

const prismaClientSingleton = () => {
  // For SQLite in Next.js, absolute paths are most reliable.
  // Prioritize the server path provided by the user if it exists.
  const isServer = process.platform === 'linux';
  const rootDir = isServer ? '/home/hwadmin/InstitutoAtomus' : process.cwd();
  const dbPath = path.join(rootDir, 'prisma', 'dev.db')
  
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

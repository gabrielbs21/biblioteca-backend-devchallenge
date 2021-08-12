import { PrismaClient } from '.prisma/client';

export const prisma = new PrismaClient();

async function main() {
  await prisma.$connect()
    .then(() => console.log('Connected to database'));
}

main();

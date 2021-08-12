import { prisma } from '../database';

class ListBookService {
  
  async execute() {
    const books = await prisma.book.findMany();

    return books;
  }

}

export { ListBookService };

import { prisma } from '../database';

class DeleteBookService {
  
  async execute(id: string) {
    await prisma.book.delete({
      where: {
        id
      }
    })
  }

}

export { DeleteBookService };

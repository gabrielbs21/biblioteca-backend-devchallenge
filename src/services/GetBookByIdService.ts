import { prisma } from '../database';

class GetBookByIdService {

  async execute(id: string) {
    if (!id) throw new Error('Book id cannot be null');

    const book = await prisma.book.findFirst({
      where: {
        id
      }
    });

    if (!book) throw new Error('Book does not exists');

    return book;
  }

}

export { GetBookByIdService };

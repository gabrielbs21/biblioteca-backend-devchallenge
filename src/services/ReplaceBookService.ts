import { prisma } from '../database';

interface IBookCreateRequest {
  title: string;
  publisher: string;
  picture_url: string;
  authors: string[];
}

class ReplaceBookService {
  
  async execute(id: string, { title, publisher, picture_url, authors }: IBookCreateRequest) {
    if (!id) throw new Error('Book id cannot be null');

    const book = await prisma.book.update({
      where: {
        id
      },
      data: {
        title,
        publisher,
        picture_url,
        authors
      }
    });

    return book;
  }

}

export { ReplaceBookService };

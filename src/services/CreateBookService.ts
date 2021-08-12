import { prisma } from '../database';

interface IBookCreateRequest {
  title: string;
  publisher: string;
  picture_url: string;
  authors: string[];
}

class CreateBookService {
  
  async execute({ title, publisher, picture_url, authors }: IBookCreateRequest) {
    const book = await prisma.book.create({
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

export { CreateBookService };

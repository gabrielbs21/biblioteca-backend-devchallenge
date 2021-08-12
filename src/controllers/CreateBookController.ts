import { Request, Response } from 'express';

import { CreateBookService } from '../services/CreateBookService';

class CreateBookController {

  async handle(request: Request, response: Response) {
    const { title, publisher, picture_url, authors } = request.body;

    const createBookService = new CreateBookService();

    const book = await createBookService.execute({
      title,
      publisher,
      picture_url,
      authors
    });

    return response.json(book);
  }

}

export { CreateBookController };

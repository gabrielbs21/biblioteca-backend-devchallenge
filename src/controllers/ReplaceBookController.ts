import { Request, Response } from 'express';

import { ReplaceBookService } from '../services/ReplaceBookService';

class ReplaceBookController {

  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { title, publisher, picture_url, authors } = request.body;

    const replaceBookService = new ReplaceBookService();

    const book = await replaceBookService.execute(id, 
      {
        title,
        publisher,
        picture_url,
        authors
      }
    );

    return response.json(book);
  }

}

export { ReplaceBookController };

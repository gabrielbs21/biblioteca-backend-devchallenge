import { Request, Response } from 'express';

import { ListBookService } from '../services/ListBookService';

class ListBookController {
  
  async handle(request: Request, response: Response) {
    const listBookService = new ListBookService();

    const books = await listBookService.execute();    

    return response.json(books);
  }

}

export { ListBookController };

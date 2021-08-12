import { Request, Response } from 'express';

import { DeleteBookService } from '../services/DeleteBookService';

class DeleteBookController {

  async handle(request: Request, response: Response) {
    const id = request.params.id;

    const deleteBookService = new DeleteBookService();

    await deleteBookService.execute(id);

    return response.status(204).json();
  }

}

export { DeleteBookController };

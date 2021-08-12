import { Request, Response } from 'express';
import { GetBookByIdService } from '../services/GetBookByIdService';

class GetBookByIdController {

  async handle(request: Request, response: Response) {
    const { id } = request.params;
    
    const getBookByIdService = new GetBookByIdService();

    const book = await getBookByIdService.execute(id);

    return response.json(book);
  }

}

export { GetBookByIdController };

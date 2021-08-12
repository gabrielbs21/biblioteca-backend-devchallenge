import { Router } from 'express';

import { CreateBookController } from './controllers/CreateBookController';
import { DeleteBookController } from './controllers/DeleteBookController';
import { GetBookByIdController } from './controllers/GetBookByIdController';
import { ListBookController } from './controllers/ListBookController';
import { ReplaceBookController } from './controllers/ReplaceBookController';

const router = Router();

const listBookController = new ListBookController();
const createBookController = new CreateBookController();
const deleteBookController = new DeleteBookController();
const getBookByIdController = new GetBookByIdController();
const replaceBookController = new ReplaceBookController();

router.get('/obras', listBookController.handle);
router.post('/obras', createBookController.handle);
router.get('/obras/:id', getBookByIdController.handle);
router.delete('/obras/:id', deleteBookController.handle);
router.put('/obras/:id', replaceBookController.handle);

export { router };

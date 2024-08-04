import { Router } from 'express';
import { createText, handleTextAction } from '@src/controllers/textController';
import fetchTextMiddleware from '@src/middlewares/fetchTextMiddleware';

const router: Router = Router();

router.get('/:textId/:action', fetchTextMiddleware, handleTextAction);

router.post('/texts', createText);

export default router;

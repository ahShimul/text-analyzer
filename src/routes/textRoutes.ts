import { Router } from 'express';
import {
  getWordCount,
  getCharacterCount,
  getSentenceCount,
  getParagraphCount,
  getLongestWord,
} from '@src/controllers/textController';
import fetchTextMiddleware from '@src/middlewares/fetchTextMiddleware';

const router: Router = Router();

router.get('/:textId/character-count', fetchTextMiddleware, getCharacterCount);
router.get('/:textId/word-count', fetchTextMiddleware, getWordCount);
router.get('/:textId/sentence-count', fetchTextMiddleware, getSentenceCount);
router.get('/:textId/paragraph-count', fetchTextMiddleware, getParagraphCount);
router.get('/:textId/longest-word', fetchTextMiddleware, getLongestWord);

export default router;

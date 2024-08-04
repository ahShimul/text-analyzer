import { Router } from 'express';
import {
  getWordCount,
  getCharacterCount,
  getSentenceCount,
  getParagraphCount,
  getLongestWord,
} from '@src/controllers/textController';

const router: Router = Router();

router.post('/word-count', getWordCount);
router.post('/character-count', getCharacterCount);
router.post('/sentence-count', getSentenceCount);
router.post('/paragraph-count', getParagraphCount);
router.post('/longest-word', getLongestWord);

export default router;

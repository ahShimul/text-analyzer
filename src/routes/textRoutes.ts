import { Router } from 'express';
import { createText, handleTextAction } from '@src/controllers/textController';
import fetchTextMiddleware from '@src/middlewares/fetchTextMiddleware';

const router: Router = Router();

/**
 * @swagger
 * /api/v1/{textId}/{action}:
 *   get:
 *     summary: Perform an action on a text entry
 *     tags: [Text]
 *     parameters:
 *       - in: path
 *         name: textId
 *         required: true
 *         description: The ID of the text entry
 *         schema:
 *           type: string
 *       - in: path
 *         name: action
 *         required: true
 *         description: The action to perform on the text entry. Possible actions include 'character-count', 'word-count', 'sentence-count', 'paragraph-count', 'longest-word'
 *         schema:
 *           type: string
 *           enum: [character-count, word-count, sentence-count, paragraph-count, longest-word]
 *     responses:
 *       200:
 *         description: Successful response with the result of the action
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: integer
 *                   description: Result of the action (e.g., count of characters, words, etc.)
 *       400:
 *         description: Bad request if the action is invalid
 *       404:
 *         description: Text not found
 *       500:
 *         description: Internal server error
 */

router.get('/:textId/:action', fetchTextMiddleware, handleTextAction);

/**
 * @swagger
 * /api/v1/texts:
 *   post:
 *     summary: Create a new text entry
 *     tags: [Text]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: The text content
 *                 example: "This is a sample text."
 *     responses:
 *       201:
 *         description: Text created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The ID of the created text entry
 *                   example: "605c72ef2f8fb814e0f7a5f1"
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/texts', createText);

export default router;

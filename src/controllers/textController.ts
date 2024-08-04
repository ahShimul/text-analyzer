import { Request, Response } from 'express';
import Text from '@src/models/text';
import * as textService from '@src/services/textService';

export const getWordCount = async (req: Request, res: Response) => {
  const text = req.body.content;
  const count = textService.countWords(text);
  res.json({ wordCount: count });
};

export const getCharacterCount = async (req: Request, res: Response) => {
  const text = req.body.content;
  const count = textService.countCharacters(text);
  res.json({ characterCount: count });
};

export const getSentenceCount = async (req: Request, res: Response) => {
  const text = req.body.content;
  const count = textService.countSentences(text);
  res.json({ sentenceCount: count });
};

export const getParagraphCount = async (req: Request, res: Response) => {
  const text = req.body.content;
  const count = textService.countParagraphs(text);
  res.json({ paragraphCount: count });
};

export const getLongestWord = async (req: Request, res: Response) => {
  const text = req.body.content;
  const longestWord = textService.getLongestWord(text);
  res.json({ longestWord });
};

export const createText = async (req: Request, res: Response) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: 'Content is required' });
  }

  try {
    const newText = new Text({ content });
    const savedText = await newText.save();

    res.status(201).json({ id: savedText._id });
  } catch (error) {
    console.error('Error creating text:', error);
    res.status(500).json({ message: 'Error creating text in database', error });
  }
};

// src/middlewares/fetchTextMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import TextModel from '@src/models/text';
import { Types } from 'mongoose';
import client from '@src/redisClient';

const fetchTextMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { textId } = req.params;

  if (!Types.ObjectId.isValid(textId)) {
    return res.status(400).json({ message: 'Invalid Id' });
  }

  const objectId = new Types.ObjectId(textId);
  const cacheKey = `text:${objectId.toString()}`;

  try {
    const cachedText = await client.get(cacheKey);

    if (cachedText) {
      console.log('Loaded from cache');
      req.body.content = JSON.parse(cachedText);
      return next();
    }

    const textDocument = await TextModel.findById(objectId);

    if (!textDocument) {
      return res.status(404).json({ message: 'Text not found' });
    }

    // Store in cache
    await client.set(cacheKey, JSON.stringify(textDocument), {
      EX: 300, // Cache expiry time in seconds (5 minutes)
    });

    req.body.content = textDocument;
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: 'Error fetching text from database', error });
  }
};

export default fetchTextMiddleware;

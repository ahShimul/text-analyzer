import { Request, Response, NextFunction } from 'express';
import TextModel from '@src/models/text';
import { Types } from 'mongoose';

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

  try {
    const textDocument = await TextModel.findById(objectId);

    if (!textDocument) {
      return res.status(404).json({ message: 'Text not found' });
    }

    req.body.content = textDocument.content;
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: 'Error fetching text from database', error });
  }
};

export default fetchTextMiddleware;

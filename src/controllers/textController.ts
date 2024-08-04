import { Request, Response } from 'express';
import Text from '@src/models/text';
import * as textService from '@src/services/textService';
import { TextActions } from '@src/enums/routesEnum';
import { isValidRequestBody } from '@src/dto/requestBodyDto';
import { ResponseBuilder } from '@src/response/responseBuilder';
import { HttpStatusCode } from '@src/enums/statusCodeEnum';
import { ErrorMessages } from '@src/enums/errorMessagesEnum';

export const handleTextAction = async (req: Request, res: Response) => {
  const responseBuilder = new ResponseBuilder(res);
  const { action } = req.params;
  const { content } = req.body;

  if (!content) {
    return responseBuilder.error(
      HttpStatusCode.BAD_REQUEST,
      'Content is required'
    );
  }

  if (!isValidRequestBody(content)) {
    return responseBuilder.error(
      HttpStatusCode.BAD_REQUEST,
      ErrorMessages.BAD_REQUEST
    );
  }

  try {
    let result: string | number;

    switch (action) {
      case TextActions.CHARACTER_COUNT:
        result = content.characterCount;
        break;
      case TextActions.WORD_COUNT:
        result = content.wordCount;
        break;
      case TextActions.SENTENCE_COUNT:
        result = content.sentenceCount;
        break;
      case TextActions.PARAGRAPH_COUNT:
        result = content.paragraphCount;
        break;
      case TextActions.LONGEST_WORD:
        result = content.longestWord;
        break;
      default:
        return responseBuilder.error(
          HttpStatusCode.BAD_REQUEST,
          ErrorMessages.BAD_REQUEST
        );
    }

    responseBuilder.success({ [action]: result });
  } catch (error) {
    console.error('Error handling text action:', error);
    responseBuilder.error(
      HttpStatusCode.INTERNAL_SERVER_ERROR,
      'Could not process the request'
    );
  }
};

export const createText = async (req: Request, res: Response) => {
  const responseBuilder = new ResponseBuilder(res);
  const { content } = req.body;

  if (!content) {
    return responseBuilder.error(
      HttpStatusCode.BAD_REQUEST,
      'Content is required'
    );
  }

  try {
    const wordCount = textService.countWords(content);
    const characterCount = textService.countCharacters(content);
    const sentenceCount = textService.countSentences(content);
    const paragraphCount = textService.countParagraphs(content);
    const longestWord = textService.getLongestWord(content);
    const newText = new Text({
      content,
      wordCount,
      characterCount,
      sentenceCount,
      paragraphCount,
      longestWord,
    });
    const savedText = await newText.save();

    responseBuilder.created({ id: savedText._id });
  } catch (error) {
    console.error('Error creating text:', error);
    responseBuilder.error(
      HttpStatusCode.INTERNAL_SERVER_ERROR,
      'Could not process the request'
    );
  }
};

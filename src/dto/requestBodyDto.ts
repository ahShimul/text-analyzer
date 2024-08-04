import { TextRequestBody } from '@src/models/text';
import { isObject } from 'lodash';

export const isValidRequestBody = (obj: unknown): obj is TextRequestBody => {
  return (
    isObject(obj) &&
    'content' in obj &&
    'wordCount' in obj &&
    'characterCount' in obj &&
    'sentenceCount' in obj &&
    'paragraphCount' in obj &&
    'longestWord' in obj
  );
};

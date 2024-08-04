import * as textService from '@src/services/textService';

import { Request, Response } from 'express';
import { createText } from '@src/controllers/textController';
import TextModel from '@src/models/text';

jest.mock('@src/models/text');

const mockTextModel = TextModel as jest.Mocked<typeof TextModel>;

describe('Text Service', () => {
  it('should return correct word count', () => {
    expect(textService.countWords('The quick brown fox')).toBe(4);
  });

  it('should return correct character count', () => {
    expect(textService.countCharacters('The quick brown fox')).toBe(19);
  });

  it('should return correct sentence count', () => {
    expect(textService.countSentences('The quick brown fox.')).toBe(1);
  });

  it('should return correct paragraph count', () => {
    expect(
      textService.countParagraphs(
        'The quick brown fox\nJumps over the lazy dog'
      )
    ).toBe(2);
  });

  it('should return the longest word', () => {
    expect(textService.getLongestWord('The quick brown fox')).toBe('quick');
  });
});

describe('createText', () => {
  it('should create a new text entry and return its ID', async () => {
    const req = {
      body: { content: 'Sample text content' },
    } as unknown as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    const mockSave = jest.fn().mockResolvedValue({ _id: 'mocked_id' });
    mockTextModel.prototype.save = mockSave;

    await createText(req, res);

    expect(mockSave).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ id: 'mocked_id' });
  });

  it('should return 400 if content is not provided', async () => {
    const req = {
      body: {},
    } as unknown as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    await createText(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'Content is required' });
  });

  it('should return 500 if an error occurs', async () => {
    const req = {
      body: { content: 'Sample text content' },
    } as unknown as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    mockTextModel.prototype.save = jest
      .fn()
      .mockRejectedValue(new Error('Database error'));

    await createText(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Error creating text in database',
      error: expect.any(Error),
    });
  });
});

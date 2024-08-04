import * as textService from '@src/services/textService';

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

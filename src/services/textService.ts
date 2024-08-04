export const countWords = (text: string): number => {
  return text.trim().split(/\s+/).length;
};

export const countCharacters = (text: string): number => {
  return text.length;
};

export const countSentences = (text: string): number => {
  return text.split(/[.!?]+/).filter(Boolean).length;
};

export const countParagraphs = (text: string): number => {
  const paragraphs = text
    .split(/\n+/)
    .filter((paragraph) => paragraph.trim().length > 0);

  console.log(paragraphs);
  return paragraphs.length;
};

export const getLongestWord = (text: string): string => {
  /* Remove punctuation but keep apostrophes within words (e.g., "don't")
  Otherwise two words like (he/she) will be treated as one word
  */
  const words = text
    .replace(/[\.,\/#!$%\^&\*;:{}=\-_`~()]/g, ' ') // Remove punctuation
    .replace(/[\n\r]+/g, ' ') // Remove new lines and replace with space
    .split(/\s+/); // Split by whitespace

  // Find the longest word
  return words.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ''
  );
};

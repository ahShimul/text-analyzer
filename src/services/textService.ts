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
  return text.split(/\n+/).filter(Boolean).length;
};

export const getLongestWord = (text: string): string => {
  const words = text.trim().split(/\s+/);
  return words.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ''
  );
};

import mongoose, { Document, Schema } from 'mongoose';

interface IText extends Document {
  content: string;
  wordCount: number;
  characterCount: number;
  sentenceCount: number;
  paragraphCount: number;
  longestWord: string;
  createdAt: Date;
  updatedAt: Date;
}

const TextSchema: Schema = new Schema(
  {
    content: { type: String, required: true },
    wordCount: { type: Number, required: true },
    characterCount: { type: Number, required: true },
    sentenceCount: { type: Number, required: true },
    paragraphCount: { type: Number, required: true },
    longestWord: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IText>('Text', TextSchema);

export interface TextRequestBody
  extends Omit<IText, '_id' | 'createdAt' | 'updatedAt'> {}

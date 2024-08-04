import mongoose, { Document, Schema } from 'mongoose';

interface IText extends Document {
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const TextSchema: Schema = new Schema(
  {
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IText>('Text', TextSchema);

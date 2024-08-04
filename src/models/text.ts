import mongoose, { Document, Schema } from 'mongoose';

interface IText extends Document {
  content: string;
}

const TextSchema: Schema = new Schema({
  content: { type: String, required: true },
});

export default mongoose.model<IText>('Text', TextSchema);

import mongoose from 'mongoose';
import app from '@src/app';

const PORT = process.env.PORT || 3000;
const MONGO_URL = 'mongodb://localhost:27017/text-analyzer';

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

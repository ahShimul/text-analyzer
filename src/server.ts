import mongoose from 'mongoose';
import app from '@src/app';
import env from '@src/config/config';

const PORT = env.PORT;
const MONGO_URL = `mongodb://${env.MONGO_URL}/${env.MONGO_DB}`;

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

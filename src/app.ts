import express, { Application } from 'express';
import bodyParser from 'body-parser';
import textRoutes from '@src/routes/textRoutes';

const app: Application = express();

app.use(bodyParser.json());
app.use('/api/text', textRoutes);

export default app;

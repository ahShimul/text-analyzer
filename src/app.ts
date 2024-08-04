import express, { Express } from 'express';
import bodyParser from 'body-parser';
import textRoutes from '@src/routes/textRoutes';
import { setupSwagger } from '@src/swagger';

const app: Express = express();
setupSwagger(app);
app.use(bodyParser.json());
app.use('/api/v1', textRoutes);

export default app;

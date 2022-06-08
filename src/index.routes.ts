import { Router } from 'express';
import { photoRouter } from './routes/photos.routes';

const routes = Router();

routes.use('/photos', photoRouter);

export { routes };

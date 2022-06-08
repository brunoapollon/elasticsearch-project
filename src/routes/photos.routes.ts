import { Router } from 'express';
import { GeneratePhotoDataController } from '../controllers/GeneratePhotoDataController';

const photoRouter = Router();

const generatePhotoDataController = new GeneratePhotoDataController();

photoRouter.post('/create-data-photos', generatePhotoDataController.store);

export { photoRouter };

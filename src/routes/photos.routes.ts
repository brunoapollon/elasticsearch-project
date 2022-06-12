import { Router } from 'express';
import { DeleteAllPhotosInElasticSearchController } from 'src/controllers/DeleteAllPhotosInElasticSearchController';
import { InsertPhotosInElasticController } from 'src/controllers/InsertPhotosInElasticController';
import { PhotoController } from 'src/controllers/PhotoController';
import { GeneratePhotoDataController } from '../controllers/GeneratePhotoDataController';

const photoRouter = Router();

const generatePhotoDataController = new GeneratePhotoDataController();
const insertPhotosInElasticController = new InsertPhotosInElasticController();
const photoController = new PhotoController();
const deleteAllPhotosInElasticSearchController =
  new DeleteAllPhotosInElasticSearchController();

photoRouter.post('/create-data-photos', generatePhotoDataController.store);
photoRouter.post('/insert-elastic', insertPhotosInElasticController.store);

photoRouter.get('/find/:photoId', photoController.show);
photoRouter.get('/list', photoController.index);

photoRouter.delete(
  '/delete-all-photos-elastic',
  deleteAllPhotosInElasticSearchController.delete,
);

export { photoRouter };

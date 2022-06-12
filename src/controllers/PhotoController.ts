import { Request, Response } from 'express';
import { FindAllPhotosService } from 'src/services/FindAllPhotosService';
import { FindPhotoByIdService } from 'src/services/FindPhotoByIdService';

class PhotoController {
  public async index(request: Request, response: Response): Promise<Response> {
    const findAllPhotosService = new FindAllPhotosService();

    const photoDataElastic = await findAllPhotosService.exevute();

    return response.status(200).json(photoDataElastic);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const { photoId } = request.params;

      const findPhotoByIdService = new FindPhotoByIdService();

      const photo = await findPhotoByIdService.execute({ photoId });

      return response.status(200).json(photo);
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}

export { PhotoController };

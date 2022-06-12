import { Request, Response } from 'express';
import { FindAllPhotosService } from 'src/services/FindAllPhotosService';
import { FindPhotoByIdService } from 'src/services/FindPhotoByIdService';
import { UpdatePhotoService } from 'src/services/UpdatePhotoService';

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

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { title, albumId, url, thumbnailurl } = request.body;

      const updatePhotoService = new UpdatePhotoService();

      const findPhotoByIdService = new FindPhotoByIdService();

      const photo = await findPhotoByIdService.execute({ photoId: id });

      await updatePhotoService.execute({
        id: photo[0]._id,
        albumId,
        title,
        url,
        thumbnailurl,
      });

      const photoUpdated = await findPhotoByIdService.execute({ photoId: id });

      return response.status(201).json({ photoUpdated });
    } catch (error: any) {
      const errorMessage = error.message;
      return response.status(400).json({ error: errorMessage });
    }
  }
}

export { PhotoController };

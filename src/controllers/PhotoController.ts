import { Request, Response } from 'express';
import { FindAllPhotosService } from 'src/services/FindAllPhotosService';

class PhotoController {
  public async index(request: Request, response: Response): Promise<Response> {
    const findAllPhotosService = new FindAllPhotosService();

    const photoDataElastic = await findAllPhotosService.exevute();

    return response.status(200).json(photoDataElastic);
  }
}

export { PhotoController };

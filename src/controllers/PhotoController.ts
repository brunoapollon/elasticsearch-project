import { Request, Response } from 'express';
import { clientElasticSearch } from 'src/client/elasticsearch';

class PhotoController {
  public async index(request: Request, response: Response): Promise<Response> {
    const photoDataElastic = await clientElasticSearch.search({
      index: 'photos',
      size: 6000,
    });

    return response.status(200).json(photoDataElastic);
  }
}

export { PhotoController };

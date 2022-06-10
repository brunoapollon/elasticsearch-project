import { Request, Response } from 'express';
import { InsertPhotosInElasticService } from 'src/services/InsertPhotosInElasticService';

class InsertPhotosInElasticController {
  public async store(request: Request, response: Response): Promise<Response> {
    try {
      const insertPhotosInElasticService = new InsertPhotosInElasticService();

      await insertPhotosInElasticService.execute();

      return response
        .status(201)
        .json({ message: 'dados criados no elastic search' });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}

export { InsertPhotosInElasticController };

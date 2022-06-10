import { Request, Response } from 'express';
import { DeleteAllPhotosInElasticSearchService } from 'src/services/DeleteAllPhotosInElasticSearchService';

class DeleteAllPhotosInElasticSearchController {
  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const deleteAllPhotosInElasticSearchService =
        new DeleteAllPhotosInElasticSearchService();

      await deleteAllPhotosInElasticSearchService.execute();

      return response
        .status(200)
        .json({ message: 'dados deletados com sucesso do elastic search.' });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}

export { DeleteAllPhotosInElasticSearchController };

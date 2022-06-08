import axios from 'axios';
import { Request, Response } from 'express';
import { Photo } from 'src/entities/Photo';
import { CreatePhotoDataInDatabaseService } from 'src/services/CreatePhotoDataInDatabaseService';

class GeneratePhotoDataController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { data } = await axios.get<Photo[]>(
      'https://jsonplaceholder.typicode.com/photos',
    );

    const createPhotoDataInDatabaseService =
      new CreatePhotoDataInDatabaseService();

    await createPhotoDataInDatabaseService.execute(data);
    return response
      .status(200)
      .json({ message: 'dados criados no banco com sucesso' });
  }
}

export { GeneratePhotoDataController };

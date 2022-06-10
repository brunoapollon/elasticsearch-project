import { clientElasticSearch } from 'src/client/elasticsearch';
import { PhotoRepository } from 'src/repositories/PhotoRepositoy';
import { getCustomRepository } from 'typeorm';

class InsertPhotosInElasticService {
  private photoRespository: PhotoRepository;
  constructor() {
    this.photoRespository = getCustomRepository(PhotoRepository);
  }

  public async execute(): Promise<void> {
    const photosDB = await this.photoRespository.find();

    for await (const photo of photosDB) {
      await clientElasticSearch.index(
        {
          index: 'photos',
          type: 'type_photos',
          body: photo,
        },
        erro => {
          if (erro) throw new Error(erro);
        },
      );
    }
  }
}

export { InsertPhotosInElasticService };

import { clientElasticSearch } from 'src/client/elasticsearch';
import { Photo } from 'src/entities/Photo';

type SearchRetrunType = {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: Photo;
};

class FindAllPhotosService {
  public async exevute(): Promise<SearchRetrunType[]> {
    const { hits } = await clientElasticSearch.search<Photo>({
      index: 'photos',
      size: 6000,
    });

    const photos = hits.hits;

    return photos;
  }
}

export { FindAllPhotosService };

import { clientElasticSearch } from 'src/client/elasticsearch';
import { Photo } from 'src/entities/Photo';

interface IFindPhptpByIdServiceRequest {
  photoId: string;
}

type SearchRetrunType = {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: Photo;
};
class FindPhotoByIdService {
  public async execute({
    photoId,
  }: IFindPhptpByIdServiceRequest): Promise<SearchRetrunType[]> {
    const { hits } = await clientElasticSearch.search<Photo>({
      index: 'photos',
      q: `id:${photoId}`,
    });

    const photo = hits.hits;

    return photo;
  }
}

export { FindPhotoByIdService };

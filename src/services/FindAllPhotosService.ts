import { clientElasticSearch } from 'src/client/elasticsearch';

class FindAllPhotosService {
  public async exevute() {
    const { hits } = await clientElasticSearch.search({
      index: 'photos',
      size: 6000,
    });

    const photos = hits.hits;

    return photos;
  }
}

export { FindAllPhotosService };

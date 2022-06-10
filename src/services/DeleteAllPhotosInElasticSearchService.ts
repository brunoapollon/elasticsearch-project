import { clientElasticSearch } from 'src/client/elasticsearch';

class DeleteAllPhotosInElasticSearchService {
  public async execute(): Promise<void> {
    const { hits } = await clientElasticSearch.search({
      index: 'photos',
      size: 7000,
    });

    for await (const photo of hits.hits) {
      await clientElasticSearch.delete({
        index: 'photos',
        type: 'type_photos',
        id: photo._id,
      });
    }
  }
}

export { DeleteAllPhotosInElasticSearchService };

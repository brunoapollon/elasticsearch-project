import { clientElasticSearch } from 'src/client/elasticsearch';

interface IUpdatePhotoServiceRequest {
  id: string;
  albumId: number | undefined;
  title: string | undefined;
  url: string | undefined;
  thumbnailurl: string | undefined;
}

class UpdatePhotoService {
  public async execute({
    id,
    albumId,
    title,
    url,
    thumbnailurl,
  }: IUpdatePhotoServiceRequest): Promise<void> {
    const photoDataUpdated = {
      albumId,
      title,
      url,
      thumbnailurl,
    };

    await clientElasticSearch.update({
      index: 'photos',
      type: 'type_photos',
      id,
      body: { doc: photoDataUpdated },
    });
  }
}

export { UpdatePhotoService };

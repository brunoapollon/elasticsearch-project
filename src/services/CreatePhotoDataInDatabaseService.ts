import { getCustomRepository } from 'typeorm';
import { Photo } from '../entities/Photo';
import { PhotoRepository } from '../repositories/PhotoRepositoy';

class CreatePhotoDataInDatabaseService {
  private photoRepository: PhotoRepository;

  constructor() {
    this.photoRepository = getCustomRepository(PhotoRepository);
  }

  public async execute(photos: Photo[]): Promise<void> {
    for await (const photoElement of photos) {
      const photoCreated = this.photoRepository.create(photoElement);

      await this.photoRepository.save(photoCreated);
    }
  }
}

export { CreatePhotoDataInDatabaseService };

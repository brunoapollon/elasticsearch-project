import { EntityRepository, Repository } from 'typeorm';
import { Photo } from '../entities/Photo';

@EntityRepository(Photo)
class PhotoRepository extends Repository<Photo> {}

export { PhotoRepository };

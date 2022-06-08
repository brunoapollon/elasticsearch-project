import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('photos')
class Photo {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  albumId: string;

  @Column()
  title: string;

  @Column()
  url: string;

  @Column()
  thumbnailurl: string;
}

export { Photo };

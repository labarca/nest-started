import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class PhotoService extends TypeOrmCrudService<Photo> {
  constructor(@InjectRepository(Photo) repo) {
      super(repo);
  }

}
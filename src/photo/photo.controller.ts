import { Controller, Get } from '@nestjs/common';
import { PhotoService } from './photo.service';

@Controller()
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get('photo')
  getPhoto(): Promise<any> {
    return this.photoService.findAll();
  }
}

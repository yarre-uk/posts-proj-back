import { Module } from '@nestjs/common';
import { PGController, PGService } from './pg/index.js';

@Module({
  imports: [],
  controllers: [PGController],
  providers: [PGService],
})
export class AppModule {}

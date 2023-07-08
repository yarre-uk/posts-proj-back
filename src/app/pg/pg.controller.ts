import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import PGService from './pg.service.js';
import { Test } from '../../models/index.js';

@Controller('pg')
class PGController {
  constructor(private readonly appService: PGService) {}

  @Get()
  async getTests() {
    const entities = await this.appService.getTests();

    return entities;
  }

  @Get(':id')
  async getTest(@Param() { id }: { id: number }) {
    const entities = await this.appService.getTest(id);

    return entities;
  }

  @Post()
  async postTest(@Body() entityDTO) {
    const entity = new Test(entityDTO);

    const resultEntity = await this.appService.postTest(entity);

    return resultEntity;
  }

  @Patch()
  async patchTest(@Body() entityDTO: Test) {
    const entity = new Test(entityDTO);

    const resultEntity = await this.appService.postTest(entity);

    return resultEntity;
  }

  @Delete(':id')
  async deleteTest(@Param() { id }: { id: number }) {
    const result = await this.appService.deleteTest(id);

    return result;
  }
}

export default PGController;

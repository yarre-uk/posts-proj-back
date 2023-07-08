import { Injectable } from '@nestjs/common';
import { Test } from '../../models/index.js';
import { AppDataSource } from '../../utils/index.js';
import { Repository } from 'typeorm';

@Injectable()
class PGService {
  repository: Repository<Test>;

  constructor() {
    this.repository = AppDataSource.getRepository(Test);
  }

  async getTests() {
    const entities = this.repository.find();

    return entities;
  }

  async getTest(id: number) {
    const entities = this.repository.findOneBy({ id });

    return entities;
  }

  async postTest(entity: Test) {
    const resultEntity = this.repository.save(entity);

    return resultEntity;
  }

  async patchTest(entity: Test) {
    if (!this.repository.exist({ where: { id: entity.id } })) {
      throw new Error(`Entity with such id doesn't exist ${entity.id}`);
    }

    const resultEntity = this.repository.save(entity);

    return resultEntity;
  }

  async deleteTest(id: number) {
    const result = this.repository.delete({ id });

    return result;
  }
}

export default PGService;

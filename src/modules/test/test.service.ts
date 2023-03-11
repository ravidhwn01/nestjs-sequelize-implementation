import { Injectable } from '@nestjs/common';
import { Repository, Sequelize } from 'sequelize-typescript';
import { TestSchema } from 'src/core/schema/test.schema';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';

@Injectable()
export class TestService {
  private repository:Repository<TestSchema>
  constructor(private sequelize:Sequelize
    ){
      this.repository = this.sequelize.getRepository(TestSchema)

  }
  create(createTestDto: CreateTestDto) {
    return 'This action adds a new test';
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.create({name:"rahul"})
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}

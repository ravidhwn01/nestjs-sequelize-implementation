import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TestSchema } from 'src/core/schema/test.schema';

@Module({
  imports: [],
  controllers: [TestController],
  providers: [TestService]
})
export class TestModule {}

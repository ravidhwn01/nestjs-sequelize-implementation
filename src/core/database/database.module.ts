import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TestSchema } from '../schema/test.schema';

@Module({
    imports: [SequelizeModule.forRoot({
        dialect: 'postgres',
        host: 'localhost',
        password: 'postgres',
        username: 'postgres',
        port: 5432,
        models: [TestSchema],
        autoLoadModels: true
    })]
}

)
export class DatabaseModule { }

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalsModule } from './modules/animals/animals.module';
import { SpeciesModule } from './modules/species/species.module';
import { TagsModule } from './modules/tags/tags.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import AnimalsEntity from './modules/animals/animals.entity';
import SpeciesEntity from './modules/species/species.entity';
import TagsEntity from './modules/tags/tags.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      synchronize: true,
      logging: true,
      logger: 'advanced-console',
      entities: [AnimalsEntity, SpeciesEntity, TagsEntity],
    }),
    AnimalsModule,
    SpeciesModule,
    TagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

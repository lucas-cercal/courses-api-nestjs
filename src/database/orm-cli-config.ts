import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { CreateCoursesTable1715105994666 } from 'src/migrations/1715105994666-CreateCoursesTable';
import { CreateTagsTable1715107181985 } from 'src/migrations/1715107181985-CreateTagsTable';
import { CreateCoursesTagsTable1715107979495 } from 'src/migrations/1715107979495-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1715110467309 } from 'src/migrations/1715110467309-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1715178940823 } from 'src/migrations/1715178940823-AddTagsIdToCoursesTagsTable';
import { Course } from 'src/courses/entities/courses.entity';
import { Tag } from 'src/courses/entities/tags.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Course, Tag],
  synchronize: false,
};

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1715105994666,
    CreateTagsTable1715107181985,
    CreateCoursesTagsTable1715107979495,
    AddCoursesIdToCoursesTagsTable1715110467309,
    AddTagsIdToCoursesTagsTable1715178940823,
  ],
});

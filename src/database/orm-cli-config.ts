import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1715105994666 } from 'src/migrations/1715105994666-CreateCoursesTable';
import { CreateTagsTable1715107181985 } from 'src/migrations/1715107181985-CreateTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [CreateCoursesTable1715105994666, CreateTagsTable1715107181985],
});

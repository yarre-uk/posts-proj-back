import { Test } from '../models/index.js';
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'Test',
  entities: [Test],
  synchronize: true,
  logging: false,
});

try {
  AppDataSource.initialize();
  console.log('Connected to the PostgreSQL database.');
} catch (error) {
  console.error('Error connecting to the PostgreSQL database:', error);
}

export default AppDataSource;

import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "path";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  username: process.env.DB_USERNAME,
  password: process.env.DB_PWD,
  database: process.env.DATABASE,
  logging: false,
  // ssl: { rejectUnauthorized: false },
  entities: [path.join(__dirname, "./entities/**/*.{js,ts}")],
  migrations: [path.join(__dirname, "./migrations/**/*.{js,ts}")],
});

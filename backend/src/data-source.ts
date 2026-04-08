import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from 'dotenv';
import {User} from "./entities/user/user.entity";

dotenv.config(); // загружает переменные из .env

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || "5432"),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
});

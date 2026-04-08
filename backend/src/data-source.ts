import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "qweaz123",
    database: "json_placeholder",
    synchronize: true, // автоматически создаёт таблицы (для разработки)
    logging: true,
    entities: [],
    migrations: [],
    subscribers: [],
});

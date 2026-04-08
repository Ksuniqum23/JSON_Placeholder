import "reflect-metadata";
import { AppDataSource } from "./data-source";

async function main() {
    await AppDataSource.initialize();
    console.log("Подключено к базе данных!");
}

main().catch(error => console.log("Ошибка:", error));

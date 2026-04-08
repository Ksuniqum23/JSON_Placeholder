import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import { AppDataSource } from "./src/data-source";


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Маршруты
app.get('/ping', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

app.get('/', (req, res) => {
    res.json({
        message: 'JSON Placeholder API is running',
    });
});

// Подключение к БД и запуск сервера
AppDataSource.initialize()
    .then(() => {
        console.log('✅ Database connected');
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('❌ Database connection error:', error);
    });

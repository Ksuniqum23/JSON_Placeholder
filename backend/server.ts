import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import { AppDataSource } from "./src/data-source";
import postRoutes from './src/routes/postRoutes';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Маршруты
app.use('/posts', postRoutes);

app.get('/ping', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

app.get('/', (req, res) => {
    res.json({
        message: 'JSON Placeholder API is running',
        endpoints: ['/posts', '/users', '/comments', '/ping']
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

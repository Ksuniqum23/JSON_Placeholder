import express from 'express';
import cors from 'cors';
import postRoutes from '../backend/src/routes/postRoutes';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ПОДКЛЮЧАЕМ МАРШРУТЫ
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

// ЗАПУСК
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

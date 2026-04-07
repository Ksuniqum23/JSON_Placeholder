import { Router } from 'express';
import { getPosts, getPost } from '../controllers/postController';

const router = Router();

router.get('/', getPosts);
router.get('/:id', getPost);

export default router;

import { Router } from 'express';
import { getComments } from '../controllers/commentController';

const router = Router();

// GET /comments?postId=1
router.get('/', getComments);

export default router;

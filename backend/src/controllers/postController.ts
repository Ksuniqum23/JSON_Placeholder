import { Request, Response } from 'express';
import { getAllPosts, getPostById } from '../models/postModel';
import {Params} from "../types";

export const getPosts = async (req: Request, res: Response): Promise<void> => {
    try {
        const posts = await getAllPosts();
        res.json(posts);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ error: 'Failed to fetch posts', details: err.message });
    }
};

export const getPost = async (req: Request<Params>, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id)) {
            res.status(400).json({ error: 'Invalid post ID' });
            return;
        }

        const post = await getPostById(id);

        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ error: 'Failed to fetch post', details: err.message });
    }
};

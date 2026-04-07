import fs from 'fs/promises';
import path from 'path';
import { Post } from '../types';

const filePath = path.join(process.cwd(), 'src', 'data', 'posts.json');

export const getAllPosts = async (): Promise<Post[]> => {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
};

export const getPostById = async (id: number): Promise<Post | undefined> => {
    const posts = await getAllPosts();
    return posts.find(post => post.id === id);
};

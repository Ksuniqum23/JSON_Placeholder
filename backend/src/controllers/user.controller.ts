import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user/user.entity";

export const getUsers = async (req: Request, res: Response) => {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();
    res.json(users);
};

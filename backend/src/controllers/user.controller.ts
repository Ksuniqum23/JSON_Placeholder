import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user/user.entity";

export const getUsers = async (req: Request, res: Response) => {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();
    res.json(users);
};

export const  getUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string );
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { id }});
    res.json(user);
}

export const createUser = async (req: Request, res: Response) => {
    const userRepository = AppDataSource.getRepository(User);
    const user = new User();
        user.name = req.body.name;
        user.username = req.body.username;
        user.email = req.body.email;
        user.phone = req.body.phone;
        user.website = req.body.website;
        user.address = req.body.address;
        user.company = req.body.company;

    const result = await userRepository.save(user);
    res.json(result);
}

export const updateUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({ where: { id } });

    if (!user) {
        return res.status(404).json({ message: "Пользователь не найден" });
    }

    user.name = req.body.name ?? user.name;
    user.username = req.body.username ?? user.username;
    user.email = req.body.email ?? user.email;
    user.phone = req.body.phone ?? user.phone;
    user.website = req.body.website ?? user.website;
    user.address = req.body.address ?? user.address;
    user.company = req.body.company ?? user.company;

    const result = await userRepository.save(user);
    res.json(result);
};

export const deleteUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);
    const userRepository = AppDataSource.getRepository(User);
    const result = await userRepository.delete(id);
    if (result.affected === 0) {
        return res.status(404).json({ message: "Пользователь не найден" });
    }
    res.json({ message: "Пользователь удален", id });
}

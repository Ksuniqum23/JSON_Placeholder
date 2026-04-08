import { Column } from "typeorm";

// Обычный класс, без декоратора
export class Company {
    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    catchPhrase: string;

    @Column({ nullable: true })
    bs: string;
}

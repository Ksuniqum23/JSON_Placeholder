import { Column } from "typeorm";

export class Geo {
    @Column({ type: "decimal", precision: 10, scale: 7 })
    lat: string;

    @Column({ type: "decimal", precision: 10, scale: 7 })
    lng: string;
}

export class Address {
    @Column({ nullable: true })
    street: string;

    @Column({ nullable: true })
    suite: string;

    @Column({ nullable: true })
    city: string;

    @Column({ nullable: true })
    zipcode: string;

    // Указываем тип, но не используем декоратор для вложенности
    @Column(() => Geo)
    geo: Geo;
}

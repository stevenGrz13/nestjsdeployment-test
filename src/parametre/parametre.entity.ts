import { Entity, PrimaryGeneratedColumn, Column,  } from "typeorm";

@Entity()
export class Parametre {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;
}
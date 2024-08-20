import { Entity, PrimaryGeneratedColumn, Column,  } from "typeorm";

@Entity()
export class TypeChambre {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;
}
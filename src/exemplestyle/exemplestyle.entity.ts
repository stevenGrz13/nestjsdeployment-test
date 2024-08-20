import { Entity, PrimaryGeneratedColumn, Column,  } from "typeorm";

@Entity()
export class ExempleStyle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;
}
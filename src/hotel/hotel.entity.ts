import { Entity, PrimaryGeneratedColumn, Column,  } from "typeorm";

@Entity()
export class Hotel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    imageacceuil: string;

    @Column()
    details: string;

    @Column()
    emplacement: string;

    @Column()
    nbChambre: number;

    @Column()
    etoile: number;
}
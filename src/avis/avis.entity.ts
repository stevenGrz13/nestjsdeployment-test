import { Hotel } from "src/hotel/hotel.entity";
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne,  } from "typeorm";

@Entity()
export class Avis {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idhotel: number;

    @ManyToOne(() => Hotel)
    @JoinColumn({ name: 'idhotel' })
    hotel: Hotel;

    @Column()
    detail: string;

    @Column()
    note: number;

    @Column()
    date: Date;
}
import { Hotel } from "src/hotel/hotel.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,  } from "typeorm";

@Entity()
export class ImageHotel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idhotel: number;

    @ManyToOne(() => Hotel)
    @JoinColumn({ name: 'idhotel' })
    hotel: Hotel;

    @Column()
    libelle: string;

    @Column()
    image: string;
}
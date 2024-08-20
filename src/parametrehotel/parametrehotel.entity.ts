import { Hotel } from "src/hotel/hotel.entity";
import { Parametre } from "src/parametre/parametre.entity";
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne,  } from "typeorm";

@Entity()
export class ParametreHotel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idhotel: number;

    @ManyToOne(() => Hotel)
    @JoinColumn({ name: 'idhotel' })
    hotel: Hotel;

    @Column()
    idparametre: number;

    @ManyToOne(() => Parametre)
    @JoinColumn({ name: 'idparametre' })
    parametre: Parametre;

    @Column()
    etat: boolean;

    nomparametre: string;
}
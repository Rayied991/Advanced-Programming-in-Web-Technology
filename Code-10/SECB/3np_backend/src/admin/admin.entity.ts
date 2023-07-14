import { ManagerEntity } from 'src/Manager/manager.entity';
import {Entity, PrimaryGeneratedColumn, PrimaryColumn, OneToMany, Column} from 'typeorm'

@Entity("Admin")
// @Entity("Admin")//no name by default created by this class name AdminEntity
export class AdminEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:"Fullname",type:"varchar",length:150})
    name:string;

    @Column({type:"varchar",length:150})
    email:string;

    @Column()
    phone:number;

    @Column()
    password:string;

    @Column()
    filenames:string;

    @OneToMany(()=> ManagerEntity,manager=>manager.admin)//One Admin can add many managers
    managers:ManagerEntity[];//Admin(single) & managers(set of arrays)
    //ManagerEntity[](array of objects)

}

@Entity("AdminProfile")
export class AdminProfile{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column({type:"varchar",length:150})
    photo:string;
}
@Entity("AdminAddress")
export class AdminAddress{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column({type:"varchar",length:150})
    photo:string;
}
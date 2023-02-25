
import {  Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;
    
    @CreateDateColumn()
    creatTime: number;

    @UpdateDateColumn ()
    updateTime: number;

    //用户名
    @Column()
    userName: string;

    //密码
    @Column()
    password: string;

    //姓名
    @Column({nullable: true})
    name?: string;

    //职务
    @Column({nullable: true})
    position?: string;

    //职务
    @Column({nullable: true})
    buddha?: string;

}
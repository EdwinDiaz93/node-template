import { Table, Model, Column, DataType, BelongsToMany } from 'sequelize-typescript';


import Rol from './rol.model';
import UserRol from './user-rol.model';
@Table({
    modelName: 'User',
    tableName: 'users'
})
class User extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataType.BIGINT
    })
    id: number;


    @Column(DataType.STRING)
    name: string;

    @Column({
        type: DataType.STRING,
        unique: true,
    })
    email: string;

    @Column(DataType.STRING)
    password: string;

    @BelongsToMany(() => Rol, () => UserRol)
    roles: Rol[]
}

export default User;


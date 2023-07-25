import { Table, Model, Column, DataType, BelongsToMany } from 'sequelize-typescript';

import User from './user.model';
import UserRol from './user-rol.model';

@Table({
    modelName: 'Rol',
    tableName: 'roles'
})
class Rol extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataType.BIGINT
    })
    id: number;


    @Column(DataType.STRING)
    name: string;

    @BelongsToMany(() => User, () => UserRol)
    users: User[]
}

export default Rol;


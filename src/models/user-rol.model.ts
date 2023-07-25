import { Table, Model, Column, DataType,ForeignKey } from 'sequelize-typescript';

import Rol from './rol.model';
import User from './user.model';

@Table({
    modelName: 'UserRol',
    tableName: 'user_rol'
})
class UserRol extends Model {
    @ForeignKey(() => Rol)
    @Column(DataType.BIGINT)
    rolId: number;
  
    @ForeignKey(() => User)
    @Column(DataType.BIGINT)
    userId: number;
}

export default UserRol;


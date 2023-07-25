import { Table, Model, Column, DataType } from 'sequelize-typescript';


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

    @Column(DataType.STRING)
    email: string;
}

export default User;


import userData from "../data/users.data";
import User from "../models/user.model"
import bcryptjs from 'bcryptjs';

export const userSeeder = async () => {
    User.create({
        name: 'admin',
        email: 'admin@example.com',
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }).then((user) => {
        //@ts-ignore
        user.setRoles(1);
    });
    User.bulkCreate([
        ...userData
    ]).then((users) => {
        //@ts-ignore
        users.forEach(user => user.setRoles(2));
    });
}
import Rol from "../models/rol.model"

export const rolSeeder = async () => {
    await Rol.bulkCreate([
        { name: 'ADMIN' },
        { name: 'USER' },
    ]);
}
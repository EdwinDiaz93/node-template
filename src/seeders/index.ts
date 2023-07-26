import { rolSeeder } from "./rol.seeder";
import { userSeeder } from "./user.seeder";


export const mainSeeder = async () => {
    await rolSeeder();
    await userSeeder();
};

export default mainSeeder;
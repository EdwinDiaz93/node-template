// DB Config
import DB from '../db';

// Models
import User from './user.model';
import Rol from './rol.model';
import UserRol from './user-rol.model';

// Assign Models

DB.addModels([
    User,
    Rol,
    UserRol,
]);

// Export DB
export default DB;
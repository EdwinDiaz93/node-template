// DB Config
import DB from '../db';

// Models
import User from './user.model';

// Assign Models

DB.addModels([
    User,
]);

// Export DB
export default DB;
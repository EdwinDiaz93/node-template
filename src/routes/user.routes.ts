import express from 'express';
import { UserController } from '../controllers';
import { verifyToken, verifyRoles } from '../middlewares';
import { Roles } from '../constants/roles.constants';


const userRoutes = express.Router();

userRoutes.get('/', [verifyToken, verifyRoles(Roles.ADMIN)], UserController.getUsers);
userRoutes.get('/:id', UserController.getUser);

export default userRoutes;
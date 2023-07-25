import express from 'express';
import { validatorSchema } from '../middlewares';
import { LoginSchema, RegisterSchema } from '../validators';
import { AuthController } from '../controllers';


const authRoutes = express.Router();

authRoutes.post('/login', [validatorSchema(LoginSchema)], AuthController.login);
authRoutes.post('/register', [validatorSchema(RegisterSchema)], AuthController.register);

export default authRoutes;
import express from 'express';

import authRoutes from "./auth.routes";
import userRoutes from './user.routes';


const mainRouter = express.Router();

mainRouter.use('/auth', authRoutes);
mainRouter.use('/users', userRoutes);

export default mainRouter;

import express from 'express';

import authRoutes from "./auth.routes";


const mainRouter = express.Router();

mainRouter.use('/auth', authRoutes);

export default mainRouter;

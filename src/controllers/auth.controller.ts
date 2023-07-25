import { Request, Response } from 'express';


class AuthController {

    static async login(req: Request, res: Response) {
        return res.json(req.body);
    }
    
    static async register(req: Request, res: Response) {

    }
}

export default AuthController;
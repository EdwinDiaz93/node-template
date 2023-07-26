import { Request, Response, NextFunction } from 'express';
import { verify } from '../utils/jwt';



const verifyToken = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const token: string = req.headers.authorization && req.headers.authorization.split(' ').pop() || '';

        if (!token || token.length === 0) return res.status(401).json({ ok: false, msg: 'invalid token' });

        const user = await verify(token);

        // @ts-ignore
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false,
            msg: 'token expired login again',
        })
    }

}

export default verifyToken;
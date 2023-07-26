import { Request, Response, NextFunction } from 'express';
import { Roles } from "../constants/roles.constants";



export const verifyRoles = (roles: Roles) => (req: Request, res: Response, next: NextFunction) => {

    //@ts-ignore
    const authorized = req.user.roles.some(rol => roles.includes(rol.name));

    if (!authorized)
        return res.status(403).json({ ok: false, msg: 'invalid permissions' });
    else
        next();
}

export default verifyRoles;
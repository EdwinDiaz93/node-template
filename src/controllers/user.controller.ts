import { Request, Response } from "express";
import User from "../models/user.model";


class UserController {

    static async getUsers(req: Request, res: Response) {
        try {
            const { page = 1, limit = 15 } = req.query;

            const offset = (+page - 1) * +limit;

            const { rows, count } = await User.findAndCountAll({
                offset,
                limit: +limit,
                order: [
                    ['id', 'desc']
                ],
            });

            const last_page = Math.ceil(count / +limit);

            return res.json({
                users: rows,
                totalRows: +count,
                first_page: 1,
                currentPage: +page,
                last_page,
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                msg: 'Internal server error'
            })
        }
    }

    static async getUser(req: Request, res: Response) {

    }


}

export default UserController;
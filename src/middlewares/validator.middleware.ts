import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const validatorSchema = (schema: Joi.Schema) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    const valid = error == null;

    if (valid) {
        next();
    } else {
        const { details } = error;
        console.log(JSON.stringify(error));
        const errors = details.map(error => ({ key: error.context.key, message: error.message}));

        res.status(422).json(errors)
    }
}

export default validatorSchema;
import Joi from 'joi';

const LoginSchema = Joi.object({
    email: Joi.
        string().
        min(5).
        email().
        required(),
    password: Joi.
        string().
        min(8).
        required(),
}).options({ allowUnknown: false});

export default LoginSchema;
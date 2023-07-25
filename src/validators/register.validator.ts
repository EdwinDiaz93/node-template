import Joi from 'joi';


const RegisterSchema = Joi.object({
    name: Joi.
        string().
        min(3).
        required(),
    email: Joi.
        string().
        min(5).
        email().
        required(),
    password: Joi.
        string().
        min(8).
        required(),
}).options({ allowUnknown: false });


export default RegisterSchema;
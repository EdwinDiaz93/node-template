import { config } from '../config';
import jwt from 'jsonwebtoken';

export const sign = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            config.jwtSecret,
            { expiresIn: '1h' },
            function (err, token) {
                if (err) {
                    reject(err);
                } else {
                    resolve(token);
                }
            });
    });
}

export const verify = (token: string) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, config.jwtSecret, function (err, decoded) {
            if (err) {
                reject(err)
            } else {
                resolve(decoded);
            }
        });
    });
}




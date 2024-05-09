import HttpError from '../models/http-error.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const createToken = ({id, name, email, role}) => {
    return jwt.sign(
        {id, name, email, role}, 
        process.env.JWT_AUTH_SECRET,
        { expiresIn: '1h'},
    );
};

export const authCheck = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return next(new HttpError('Bad request, missing authorization token', 401));
        }
        const token = authHeader.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_AUTH_SECRET);
        req.user = {
            user: decodedToken.name,
            email: decodedToken.email,
            role: decodedToken.role,
        };
        next();
    } catch (error) {
        console.log(error);
        const err = new HttpError('Authentication failed', 401);
        return next(err);
    }
};

export const authAdminCheck = (req, res, next) => {
    if (req.user.role !== 'admin') {
        throw new HttpError('Not authorised for this action.', 401);
    }
    next();
};

export default {
    createToken,
    authCheck,
    authAdminCheck,
};
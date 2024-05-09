import { validationResult } from "express-validator";
import HttpError from '../models/http-error.js';

const validateInput = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        throw new HttpError('Invalid input', 422);
    }
    next();
}

export default validateInput;
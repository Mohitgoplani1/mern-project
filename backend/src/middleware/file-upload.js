import multer from 'multer';
import {v4 as uuid} from 'uuid';

const MIME_TYPES_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
};

const fileUpload = multer({
    limits: 500000,
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/images');
        },
        filename: (req, file, cb) => {
            const ext = MIME_TYPES_MAP[file.mimetype];
            cb( null, uuid() + '.' + ext);
        },
    }),
    fileFilter: (req, file, cb) => {
        const isValid = !!MIME_TYPES_MAP[file.mimetype];
        let error = isValid ? null : new Error('Invalid file type');
        cb(error, isValid);
    },
});

export default fileUpload;
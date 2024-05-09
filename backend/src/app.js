import './database/connection.js'
import express from 'express';
import usersRoutes from './routes/user.route.js';
import HttpError from './models/http-error.js';
import path from 'path';
import cookieParser from 'cookie-parser';
import { unlink } from 'fs';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, OPTIONS'
    );
    if(req.method === 'OPTIONS'){
        return res.status(200).json({});
    }
    next();
});

app.use('/uploads/images', express.static(path.join('uploads', 'images')));

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);
app.use((req, res, next) => {
    throw new HttpError('Page does not exist', 404);
});

// special error handler middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });

const port = 3000;
app.listen(port);
console.log('Server listening at port:', port);
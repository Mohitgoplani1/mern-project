import express from 'express';
import { verifyToken } from '../utils/verifyuser.js';
import {
    createComment,
    deleteComment,
    getPostComments,
    likeComment,
    getcomments,
    editComment
  } from '../controllers/comment.controller.js';

const router = express.Router();


router.post('/create', verifyToken, createComment);
router.get('/getPostComments/:postId', getPostComments);
router.put('/likeComment/:commentId', verifyToken, likeComment);
router.put('/editComment/:commentId',verifyToken,editComment);
router.get('/getcomments', verifyToken, getcomments);
router.delete('/deleteComment/:commentId', verifyToken, deleteComment);
export default router;
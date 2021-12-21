import { Router } from 'express';
import PostController from '../controllers/post.controller';

const router = Router();

enum PostsEndpoints {
  POST = '/posts',
  POST_WITH_ID = '/posts/:id',
}

router.post(`${PostsEndpoints.POST}`, (req, res) => PostController.create(req, res));

router.get(`${PostsEndpoints.POST}`, (req, res) => PostController.getPosts(req, res));

router.get('/posts/:id', (req, res) => PostController.getPosts(req, res));

router.put(`${PostsEndpoints.POST}`, (req, res) => PostController.update(req, res));

router.delete(`${PostsEndpoints.POST}`, (req, res) => PostController.delete(req, res));

export default router;

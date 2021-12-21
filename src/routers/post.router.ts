import { Router } from 'express';
import PostController from '../controllers/post.controller';

const router = Router();

type TRouterEndpoints = '/posts' | '/posts/:id';

router.post<TRouterEndpoints>('/posts', (req, res) => PostController.create(req, res));

router.get<TRouterEndpoints>('/posts', (req, res) => PostController.getPosts(req, res));

router.get<TRouterEndpoints>('/posts/:id', (req, res) => PostController.getPosts(req, res));

router.put<TRouterEndpoints>('/posts', (req, res) => PostController.update(req, res));

router.delete<TRouterEndpoints>('/posts', (req, res) => PostController.delete(req, res));

export default router;

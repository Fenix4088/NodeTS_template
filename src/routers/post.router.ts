import { Router } from "express";
import PostController from "../controllers/post.controller";

const router = Router();

router.post('/posts', (req, res) => PostController.create(req, res))


export default router;
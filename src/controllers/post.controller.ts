import { TypedRequestBody, TypedRequestQuery } from '../types/common';
import { Response, Request } from 'express';
import { ICreatePostBody, IGetPosts } from '../types/posts';
import Post from '../models/post.model';
import { Document } from 'mongoose';

interface IPostController {
  create(req: TypedRequestBody<ICreatePostBody>, res: Response): Promise<void>;
}

class PostController implements IPostController {
  public create = async (req: TypedRequestBody<ICreatePostBody>, res: Response) => {
    try {
      const { author, title, content, picture } = req.body;

      const newPost: ICreatePostBody & Document = new Post({ author, title, content, picture });

      const savedPostRes = await newPost.save();

      res.status(200).send(savedPostRes);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };

  public getPosts = async (req: Request<{}, {}, {}, IGetPosts>, res: Response) => {};
}

export default new PostController();

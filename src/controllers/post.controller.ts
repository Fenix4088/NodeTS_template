import { TypedRequestQuery } from './../../dist/src/types/common.d';
import { TypedRequestBody } from '../types/common';
import { Response, Request } from 'express';
import { ICreatePostBody, IGetPosts } from '../types/posts';
import PostServices from '../services/post.services';

interface IPostController {
  create(req: TypedRequestBody<Omit<ICreatePostBody, '_id'>>, res: Response): Promise<void>;
  getPosts(req: TypedRequestBody<ICreatePostBody>, res: Response): Promise<void>;
  update(req: TypedRequestBody<ICreatePostBody>, res: Response): Promise<void>;
  delete(req: TypedRequestBody<ICreatePostBody>, res: Response): Promise<void>;
}

class PostController implements IPostController {
  public create = async (req: TypedRequestBody<Omit<ICreatePostBody, '_id'>>, res: Response) => {
    try {
      const { author, title, content, picture } = req.body;

      const newPost = await PostServices.create({ author, title, content, picture });

      res.status(200).send(newPost);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  };

  public getPosts = async (req: Request<{}, {}, {}, IGetPosts>, res: Response) => {
    const { id } = req.query;

    try {
      const getPostsResult = await PostServices.getPosts(id);

      if (!getPostsResult) {
        res.status(404).json(`Post by id: ${id} wasnt found`);
        return;
      }
      res.status(200).json(getPostsResult);
    } catch (e) {
      res.status(500).send(e);
    }
  };

  public update = async (req: TypedRequestBody<ICreatePostBody>, res: Response) => {
    const { author, title, content, picture, _id } = req.body;

    if (!_id) {
      res.status(400).json(`No post id`);
    }

    const updatedPost = await PostServices.update({ author, title, content, picture, _id });

    if (!updatedPost) {
      res.status(404).json(`Post with id: ${_id} not found`);
    }

    res.status(200).json(updatedPost);
  };

  public delete = async (req: any, res: Response) => {
    try {
      const { id } = req.query;

      if (!id) {
        res.status(404).send('Add id to delete a post');
        return;
      }

      const deletedPost = await PostServices.delete(id);

      if (!deletedPost) {
        res.status(404).json(`Post by id: ${id} not found`);
        return;
      }

      res.status(200).json(deletedPost);
    } catch (err) {
      res.status(500).send(err);
    }
  };
}

export default new PostController();

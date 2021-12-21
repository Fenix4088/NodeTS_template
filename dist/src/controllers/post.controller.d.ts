import { TypedRequestBody } from '../types/common';
import { Response, Request } from 'express';
import { ICreatePostBody, IGetPosts } from '../types/posts';
interface IPostController {
    create(req: TypedRequestBody<Omit<ICreatePostBody, '_id'>>, res: Response): Promise<void>;
    getPosts(req: TypedRequestBody<ICreatePostBody>, res: Response): Promise<void>;
}
declare class PostController implements IPostController {
    create: (req: TypedRequestBody<Omit<ICreatePostBody, '_id'>>, res: Response) => Promise<void>;
    getPosts: (req: Request<{}, {}, {}, IGetPosts>, res: Response) => Promise<void>;
    update: (req: TypedRequestBody<ICreatePostBody>, res: Response) => Promise<void>;
}
declare const _default: PostController;
export default _default;

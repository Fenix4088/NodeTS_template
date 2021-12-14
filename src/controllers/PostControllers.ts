import { TypedRequestBody, TypedRequestQuery } from "../types/common";
import { Request, Response } from 'express';
import { ICreatePostBody } from "src/types/posts";

interface IPostController {
      create(req: TypedRequestBody<ICreatePostBody>, res: Response): Promise<void>

}

class PostController implements IPostController {
       public create = async (req: TypedRequestBody<ICreatePostBody>, res: Response) => {
            try {

                  const {author, title, content} = req.body;
                  console.log(author, title, content);
                  

                  res.status(200).send('POSTS')
      
            } catch(err: any) {
                  res.status(500).send(err.message)
            }
      }
}

export default new PostController();
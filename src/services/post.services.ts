import { ICreatePostBody } from "../types/posts";
import Post from '../models/post.model';
import { DocumentedObject } from "../types/common";

interface IPostServices {
  create(post: Omit<ICreatePostBody, '_id'>): Promise<DocumentedObject<ICreatePostBody>>;
  getPosts(id?:string): Promise<DocumentedObject<ICreatePostBody>[] | DocumentedObject<ICreatePostBody> | null>;
}


class PostServices implements IPostServices {
      public create = async (post: Omit<ICreatePostBody, '_id'>): Promise<DocumentedObject<ICreatePostBody>> => {
              const { author, title, content, picture } = post;
        
              const newPost = new Post({ author, title, content, picture });
              await newPost.save();
        
              return newPost;
          };
        
          public getPosts = async (id?: string): Promise<DocumentedObject<ICreatePostBody>[] | DocumentedObject<ICreatePostBody> | null> => {
            debugger;
                if(!id) {
                  const allPosts = await Post.find(); 
                  return allPosts;
                }
        
                const post = await Post.findById(id);
        
                return post;
        
          };
        
          // public update = async (req: TypedRequestBody<ICreatePostBody>, res: Response) => {
          //   const { author, title, content, picture, _id } = req.body;
        
          //   if(!_id) {
          //     res.status(400).json(`No post id`);
          //   }
        
          //   const updatedPost = await Post.findOneAndUpdate({_id}, {author, title, content, picture}, {new: true});
        
          //   if(!updatedPost) {
          //     res.status(404).json(`Post with id: ${_id} not found`);
          //   }
            
          //   res.status(200).json(updatedPost)
        
          // };
}

export default new PostServices();
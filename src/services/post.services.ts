import { ICreatePostBody } from "src/types/posts";

class PostServices {
      public create = async (post: Omit<ICreatePostBody, '_id'>) => {
            try {
              const { author, title, content, picture } = post;
        
              const newPost: ICreatePostBody & Document = new Post({ author, title, content, picture });
        
              const savedPostRes = await newPost.save();
        
              res.status(200).send(savedPostRes);
            } catch (err: any) {
              res.status(500).send(err.message);
            }
          };
        
          public getPosts = async (req: Request<{}, {}, {}, IGetPosts>, res: Response) => {
            const {id} = req.query;
              try {
                if(!id) {
                  const allPosts = await Post.find(); 
                  res.status(200).send(allPosts);
                  return;
                }
        
                const post = await Post.findById(id);
        
                if(!post) {
                  res.status(404).send('Post not found');
                  return;
                } 
        
                res.status(200).send(post);
        
        
              } catch(e) {
                res.status(500).send(e);
              }
        
          };
        
          public update = async (req: TypedRequestBody<ICreatePostBody>, res: Response) => {
            const { author, title, content, picture, _id } = req.body;
        
            if(!_id) {
              res.status(400).json(`No post id`);
            }
        
            const updatedPost = await Post.findOneAndUpdate({_id}, {author, title, content, picture}, {new: true});
        
            if(!updatedPost) {
              res.status(404).json(`Post with id: ${_id} not found`);
            }
            
            res.status(200).json(updatedPost)
        
          };
}

export default new PostServices();
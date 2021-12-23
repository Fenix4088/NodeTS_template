import { ICreatePostBody } from '../types/posts';
import Post from '../models/post.model';
import { DocumentedObject } from '../types/common';
import FileService from './file.service';

interface IPostServices {
  create(post: Omit<ICreatePostBody, '_id'>): Promise<DocumentedObject<ICreatePostBody>>;
  getPosts(id?: string): Promise<DocumentedObject<ICreatePostBody>[] | DocumentedObject<ICreatePostBody> | null>;
  update(post: ICreatePostBody): Promise<DocumentedObject<ICreatePostBody> | null>;
  delete(id: string): Promise<DocumentedObject<ICreatePostBody> | null>;
}

class PostServices implements IPostServices {
  public create = async (post: Omit<ICreatePostBody, '_id'>): Promise<DocumentedObject<ICreatePostBody>> => {

    const { author, title, content, picture } = post;
    
    let fileName: string  | undefined  = '';
    if(picture) {
      fileName = await FileService.saveFile(picture);
    }
     

    const newPost = new Post({ author, title, content, picture: fileName });
    await newPost.save();

    return newPost;
  };

  public getPosts = async (id?: string): Promise<DocumentedObject<ICreatePostBody>[] | DocumentedObject<ICreatePostBody> | null> => {
    if (!id) {
      const allPosts = await Post.find();
      return allPosts;
    }

    const post = await Post.findById(id);

    return post;
  };

  public update = async (post: ICreatePostBody): Promise<DocumentedObject<ICreatePostBody> | null> => {
    const { author, title, content, picture, _id } = post;

    const updatedPost = await Post.findOneAndUpdate({ _id }, { author, title, content, picture }, { new: true });

    return updatedPost;
  };

  public delete = async (id: string): Promise<DocumentedObject<ICreatePostBody> | null> => {
    const deletedPost = await Post.findByIdAndDelete(id);
    return deletedPost;
  };
}

export default new PostServices();

import { Types } from 'mongoose';

export interface ICreatePostBody {
  _id?: Types.ObjectId;
  author: string;
  title: string;
  content: string;
  picture?: string;
}

export interface IGetPosts {
  id?: string;
}

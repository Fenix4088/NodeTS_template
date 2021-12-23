import { FileArray, UploadedFile } from 'express-fileupload';
import { Types } from 'mongoose';

export interface ICreatePostBody {
  _id?: Types.ObjectId;
  author: string;
  title: string;
  content: string;
  picture?: UploadedFile | UploadedFile[];
}

export interface IGetPosts {
  id?: string;
}

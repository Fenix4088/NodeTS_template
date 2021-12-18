import mongoose, { Schema } from 'mongoose';
import { ICreatePostBody } from '../types/posts';


const Post: Schema = new Schema<ICreatePostBody>({
  author: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  picture: { type: String },
});

export default mongoose.model<ICreatePostBody>('Post', Post);

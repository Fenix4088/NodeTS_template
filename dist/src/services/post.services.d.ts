import { ICreatePostBody } from "../types/posts";
import { DocumentedObject } from "../types/common";
interface IPostServices {
    create(post: Omit<ICreatePostBody, '_id'>): Promise<DocumentedObject<ICreatePostBody>>;
    getPosts(id?: string): Promise<DocumentedObject<ICreatePostBody>[] | DocumentedObject<ICreatePostBody> | null>;
}
declare class PostServices implements IPostServices {
    create: (post: Omit<ICreatePostBody, '_id'>) => Promise<DocumentedObject<ICreatePostBody>>;
    getPosts: (id?: string | undefined) => Promise<DocumentedObject<ICreatePostBody>[] | DocumentedObject<ICreatePostBody> | null>;
}
declare const _default: PostServices;
export default _default;

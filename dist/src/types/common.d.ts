import { Query } from 'express-serve-static-core';
import { Request } from 'express';
import { Types, Document } from 'mongoose';
export interface TypedRequestBody<T = any> extends Request {
    body: T;
}
export interface TypedRequestQuery<T extends Query> extends Request {
    query: T;
}
export declare type DocumentedObject<T> = Document<any, any, T> & T & {
    _id: Types.ObjectId;
};

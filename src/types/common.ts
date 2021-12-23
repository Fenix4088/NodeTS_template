import { Query } from 'express-serve-static-core';

import { Request } from 'express';
import { Types, Document } from 'mongoose';
import { FileArray, UploadedFile } from 'express-fileupload';

export interface TypedRequestBody<T = any> extends Request {
  body: T;
}

export type TRequest<ReqBody, ReqQuery, WithFile = false> = Request<{}, {}, ReqBody, ReqQuery> & WithFileType<WithFile>;

//TODO: try to redaclare original FileArray type and set there a strict strings as a keys
type WithFileType<C> = C extends true
  ? {
      files?: FileArray;
    }
  : {};

export type DocumentedObject<T> = Document<any, any, T> &
  T & {
    _id: Types.ObjectId;
  };

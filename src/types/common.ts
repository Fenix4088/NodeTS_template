import { Query } from 'express-serve-static-core';

import { Request } from 'express';
import { Types, Document } from 'mongoose';
import { UploadedFile } from 'express-fileupload';

export interface TypedRequestBody<T = any> extends Request {
  body: T;
}

export type TRequest<ReqBody, ReqQuery, WithFile = false, FileListNames = ''> = Request<{}, {}, ReqBody, ReqQuery> & WithFileType<WithFile, FileListNames>;

type WithFileType<C, FileListNames> = C extends true ? {
  files?: FileListGenerator<FileListNames>
} : {};

type FileListGenerator<FileListNames extends 'string | number | symbol'> = {
  [key in FileListNames extends '' ? never : FileListNames]: UploadedFile
}

export type DocumentedObject<T> = Document<any, any, T> & T & {
  _id: Types.ObjectId;
};

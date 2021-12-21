import { Query } from 'express-serve-static-core';

import { Request } from 'express';
import { Types, Document } from 'mongoose';

export interface TypedRequestBody<T = any> extends Request {
  body: T;
}

export type TypedRequestQuery<T> = Request<{}, {}, {}, T>;

export type DocumentedObject<T> = Document<any, any, T> & T & {
  _id: Types.ObjectId;
};

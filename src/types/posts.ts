export interface ICreatePostBody {
      _id: string;
      author: string;
      title: string;
      content: string;
      picture?: string;
}

export interface IGetPosts {
      id?: string;
}
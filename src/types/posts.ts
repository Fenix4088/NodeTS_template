export interface ICreatePostBody {
      author: string;
      title: string;
      content: string;
      picture?: string;
}

export interface IGetPosts {
      id?: string;
}
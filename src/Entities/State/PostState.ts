import { Post } from '../Post/Post';

export type PostState = {
  posts: Post[];
  error: null | string;
  loading: boolean;
};

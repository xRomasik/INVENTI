import { useEffect } from 'react';
import { getPosts } from '../State/Post/postSlice';
import { useAppDispatch, useAppSelector } from '../State/store';
import { PostDetail } from './PostDetail';

export const PostList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { loading, posts, error } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="post-widget-container">
      {loading ? (
        <div className="card">Loading ...</div>
      ) : error ? (
        <div className="card">{error}</div>
      ) : (
        <>
          <div className="post-list">
            {posts.map((post) => (
              <PostDetail key={post.id} post={post} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

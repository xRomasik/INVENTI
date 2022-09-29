import { useState } from 'react';
import { Post } from '../Entities/Post/Post';
import { ImageLoader } from '../Shared/ImageLoader';
import { deletePost } from '../State/Post/postSlice';
import { useAppDispatch } from '../State/store';

export type PostDetailProps = {
  post: Post;
};

export const PostDetail = (props: PostDetailProps): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  const { post } = props;

  const dispatch = useAppDispatch();

  return (
    <div className="card">
      <button
        className="post-title"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <h3>{post.title}</h3>
      </button>
      {expanded && (
        <div className="post-body">
          <header className="post-body-header">
            <dl>
              <dt>ID:</dt>
              <dd>{post.id}</dd>
              <dt>User ID:</dt>
              <dd>{post.userId}</dd>
            </dl>
            <ImageLoader key={post.id} />
          </header>
          <p>{post.body}</p>
          <button onClick={() => dispatch(deletePost(post.id))}>
            Delete Post
          </button>
        </div>
      )}
    </div>
  );
};

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Post } from '../../Entities/Post/Post';
import { PostState } from '../../Entities/State/PostState';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<Post[]>(POSTS_URL);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkApi.rejectWithValue(error.message);
      } else {
        return thunkApi.rejectWithValue('Something went wrong');
      }
    }
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (postId: number, thunkApi) => {
    try {
      await axios.delete<number>(`${POSTS_URL}/${postId}`);
      // since jsonplaceholder delete method is not returning deleted post, I am using postId as a payload return value.
      return postId;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkApi.rejectWithValue(error.message);
      } else {
        return thunkApi.rejectWithValue('Something went wrong');
      }
    }
  }
);

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getPosts.fulfilled,
      (state, action: PayloadAction<Post[]>) => {
        state.loading = false;
        state.posts = action.payload;
      }
    );
    builder.addCase(getPosts.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(
      deletePost.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      }
    );
    builder.addCase(deletePost.rejected, () => {
      alert('There was an issue deleting this post. Please try again.');
    });
  },
});

export const { reducer: postsReducer } = postSlice;

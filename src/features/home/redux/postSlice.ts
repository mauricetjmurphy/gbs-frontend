import * as React from "react";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface BlogPost {
//   id: string;
//   title: string;
//   body: string;
// }

// interface BlogPostsState {
//   blogPosts: BlogPost[];
//   selectedPostId: string | null;
//   error: string | null;
// }

// const initialState: BlogPostsState = {
//   blogPosts: [],
//   selectedPostId: null,
//   error: null,
// };

// export const postSlice = createSlice({
//   name: "posts",
//   initialState,
//   reducers: {
//     fetchPosts: (state) => {
//       state.blogPosts = [...fetchData()];
//     },
//     selectPost: (state, action: PayloadAction<string>) => {
//       state.selectedPostId = action.payload;
//     },
//     setError: (state, action: PayloadAction<string>) => {
//       state.error = action.payload;
//     },
//   },
// });

// export const { fetchPosts, selectPost, setError } = postSlice.actions;

// export const getSelectedPost = (state: BlogPostsState) =>
//   state.blogPosts.find((post) => post.id === state.selectedPostId);
// export const getBlogPosts = (state: BlogPostsState) => state.blogPosts;
// export const getError = (state: BlogPostsState) => state.error;

// export default postSlice.reducer;

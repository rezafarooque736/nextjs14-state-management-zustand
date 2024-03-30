import { create } from "zustand";

export const usePostsStore = create((set) => ({
  posts: [
    {
      id: 1,
      title: "Object 1",
      description: "Description for object 1",
    },
    {
      id: 2,
      title: "Object 2",
      description: "Description for object 2",
    },
    {
      id: 3,
      title: "Object 3",
      description: "Description for object 3",
    },
  ],
  addPost: (newPost) => {
    set((state) => {
      return { posts: [...state.posts, newPost] };
    });
  },
  editPost: (id, updatePost) => {
    set((state) => {
      const updatePosts = state.posts.map((post) => {
        if (post.id === id) {
          return { ...post, ...updatePost };
        }
        return post;
      });
      return { posts: updatePosts };
    });
  },
  deletePost: (id) => {
    set((state) => {
      const updatePost = state.posts.filter((post) => post.id !== id);
      return { posts: updatePost };
    });
  },
}));

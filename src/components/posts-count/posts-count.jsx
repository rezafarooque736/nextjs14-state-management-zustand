"use client";

import { usePostsStore } from "@/store/posts";
import React from "react";

const PostsCount = () => {
  const { posts } = usePostsStore();
  return (
    <div>
      <h2>PostsCount : {posts.length}</h2>
    </div>
  );
};

export default PostsCount;

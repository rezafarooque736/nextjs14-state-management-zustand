"use client";

import { usePostsStore } from "@/store/posts";
import React, { useState } from "react";
import styles from "./posts.module.css";

const Posts = () => {
  const { posts, addPost, editPost, deletePost } = usePostsStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postId, setPostId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleAddPost = (e) => {
    e.preventDefault();

    if (!title || !description) return alert("Please fill all the fields");

    const newPost = {
      id: Date.now(),
      title,
      description,
    };

    addPost(newPost);

    setTitle("");
    setDescription("");
    setPostId(null);
  };

  const handleEditPost = (e) => {
    e.preventDefault();

    if (!title || !description) return alert("Please fill all the fields");

    const updatedPost = {
      id: postId,
      title,
      description,
    };

    editPost(postId, updatedPost);
    setTitle("");
    setDescription("");
    setPostId(null);
    setIsEdit(false);
  };

  const EditAPost = (id) => {
    const post = posts.find((post) => post.id === id);
    setTitle(post.title);
    setDescription(post.description);
    setPostId(id);
    setIsEdit(true);
  };

  const handleDeletePost = (id) => {
    deletePost(id);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          type="text"
          className={styles.input}
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className={styles.input}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          className={styles.button}
          onClick={isEdit ? handleEditPost : handleAddPost}
        >
          {isEdit ? "Edit Post" : "Add New Post"}
        </button>
      </form>
      <h1 className={styles.heading}>Posts</h1>
      {posts ? (
        posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <h3 className={styles.title}>{post.title}</h3>
            <h3 className={styles.description}>{post.description}</h3>
            <button
              className={styles.editButton}
              onClick={() => EditAPost(post.id)}
            >
              Edit
            </button>
            <button
              className={styles.deleteButton}
              onClick={() => handleDeletePost(post.id)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <h2>No post found</h2>
      )}
    </div>
  );
};

export default Posts;

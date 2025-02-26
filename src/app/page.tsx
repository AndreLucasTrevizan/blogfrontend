"use client";

import { useEffect, useState } from "react";
import { getPosts } from "./posts/actions";

export interface PostType {
  id: number
  title: string
  body: string
  createdAt: string
  updatedAt: string
  user: UserPostType
}

export interface UserPostType {
  id: number
  name: string
}

export default function Home() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(false);

  useEffect(() => {
    setLoadingPosts(true);

    async function loadPosts() {
      const posts = await getPosts();

      setPosts(posts);

      setLoadingPosts(false);
    }

    loadPosts();
  }, []);

  return (
    <div
      className="
        m-auto
        p-4
        w-3/4
        flex
        flex-col
        gap-4
      "
    >
      {loadingPosts && (
        <div
          className="text-center py-8"
        >
          <span>Carregando posts...</span>
        </div>
      )}
      {posts && (
        posts.map((post) => (
          <div
            key={post.id}
            className="
              flex
              flex-col
            "
          >
            <div
              className="
                bg-blue-400
                text-white
                text-lg
                font-bold
                p-2
              "
            >
              <span>{post.title}</span>
            </div>
            <div
              className="
                p-2
                border
              "
            >
              <p>{post.body}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

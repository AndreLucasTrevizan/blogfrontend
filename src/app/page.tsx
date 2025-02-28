"use client";

import { useEffect, useState } from "react";
import { getPosts } from "./posts/actions";
import PostComponent from "./_ui/PostComponent";
import MenuHome from "./_ui/MenuHome";

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
        md:m-auto
        md:w-3/4
        p-4
        flex
        flex-col
        gap-4
      "
    >
      <MenuHome />
      {loadingPosts ? (
        <div
          className="text-center py-8"
        >
          <span>Carregando posts...</span>
        </div>
      ) : posts.length == 0 ? (
        <div>
          <h1 className="text-sm">Nenhum post foi cadastrado</h1>
        </div>
      ) : (
        posts.map((post) => (
          <PostComponent key={post.id} post={post} />
        ))
      )}
    </div>
  );
}

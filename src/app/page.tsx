"use client";

import { useEffect, useState } from "react";
import { getPosts } from "./posts/actions";
import PostComponent from "./_ui/PostComponent";
import MenuHome from "./_ui/MenuHome";
import Pagination from "./_ui/Pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

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
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [posts, setPosts] = useState<{ posts: PostType[], pages: number, limit: number }>({
    posts: [],
    pages: 1,
    limit: 5
  });
  const [loadingPosts, setLoadingPosts] = useState(false);

  useEffect(() => {
    setLoadingPosts(true);

    async function loadPosts() {
      const posts = await getPosts(page, limit);

      setPosts(posts);

      setLoadingPosts(false);
    }

    loadPosts();
  }, [ page, limit ]);

  const getSelectedPage = (page: number) => {
    setPage(page);
  }

  const increasePage = () => {
    if (page + 1 <= posts.pages) {
      setPage(page+1);
    }
  }
  
  const decreasePage = () => {
    if (page - 1 > 0) {
      setPage(page-1);
    }
  }

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
      <MenuHome />
      <div>
        <label>Items por página: </label>
        <select onChange={(e) => setLimit(Number(e.target.value))}>
          <option value="5" defaultValue={5}>5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
      {loadingPosts ? (
        <div
          className="text-center py-8"
        >
          <span>Carregando posts...</span>
        </div>
      ) : posts?.posts.length == 0 ? (
        <div>
          <h1 className="text-sm">Nenhum post foi cadastrado</h1>
        </div>
      ) : (
        posts.posts.map((post) => (
          <PostComponent key={post.id} post={post} />
        ))
      )}
      <div
        className="flex gap-4"
      >
        <button
          disabled={page - 1 < 0}
          className="size-8 p-2 flex items-center justify-center rounded bg-white text-[#00D1CD]"
          onClick={() => decreasePage()}
        >
          <FaChevronLeft />
        </button>
        <Pagination amountOfPages={posts.pages} returnPage={getSelectedPage} />
        <button
          disabled={page + 1 > posts.pages}
          className="size-8 p-2 flex items-center justify-center rounded bg-white text-[#00D1CD]"
          onClick={() => increasePage()}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

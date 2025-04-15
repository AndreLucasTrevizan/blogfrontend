"use client";

import Link from "next/link";
import { PostType } from "../page";
import { usePathname } from "next/navigation";
import { useState } from "react";
import FormComment from "./FormComment";
import { getDateWithHour } from "../_helper/date";
import PostOption from "./PostOptions";

export default function PostComponent({
  post
}: {
  post: PostType
}) {
  const pathname = usePathname();
  const [showFormComment, setShowFormComment] = useState(false);

  return (
    <div
      className="
        flex
        flex-col
        text-sm
        border
        rounded-tl
        rounded-tr
        rounded-bl
        rounded-br
        "
    >
      <div
        className="
          rounded-tl
          rounded-tr
          bg-white
          text-gray-950
          font-bold
          p-2
        "
      >
        <div
          className="flex justify-between"
        >
          <div
            className="text-sm text-gray-500"
          >
            <span>{post.user.name}</span>
            <div
              className="
                flex
                gap-4
                mb-2
              "
            >
              <small>{getDateWithHour(post.createdAt)}</small>
            </div>
          </div>
          <PostOption post={post} />
        </div>
        <span>{post.title}</span>
      </div>
      <div
        className="
          p-2
          bg-white
        "
      >
        <p
          className={pathname == '/' ? `
            overflow-hidden
            text-justify
            truncate
          ` : ""}
        >{post.body}</p>
      </div>
      <div
        className="bg-white rounded-bl rounded-br"
      >
        {pathname != `/posts/${post.id}` && (
          <div
            className="
              p-2
            "
          >
            <Link href={`/posts/${post.id}`} className="text-[#00D1CD] font-bold">Ver mais</Link>
          </div>
        )}
        {pathname.includes("/posts/") && (
          <div
            className="
              p-2
              flex
              flex-col
              items-start
            "
          >
            {!showFormComment && (
              <button
                type="button"
                onClick={() => setShowFormComment(true)}
                className="
                  text-[#00D1CD]
                  font-bold
                  hover:cursor-pointer
                "
              >Criar Comentario</button>
            )}
            {showFormComment && (
              <FormComment postId={post.id} setShowFormComment={() => setShowFormComment(false)} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
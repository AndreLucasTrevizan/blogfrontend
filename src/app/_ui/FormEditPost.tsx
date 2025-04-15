"use client";

import { useActionState } from "react";
import ErrorMessage from "./ErrorMessage";
import { PostType } from "../page";
import { editPost } from "../posts/edit/[id]/actions";

const initialState = {
  message: ''
};

export default function FormEditPost({
  post
}: {
  post: PostType
}) {
  const [state, formAction, pending] = useActionState(editPost, initialState);

  return (
    <form
      className="
        flex
        flex-col
        border
        rounded
        bg-white
      "
      action={formAction}
    >
      <div
        className="
          p-4
          font-bold
          border-b
        "
      >
        <span className="text-lg">Editando Post</span>
      </div>
      <div
        className="p-4 flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <label>Título</label>
          <input defaultValue={post.id} type="hidden" className="p-2 border rounded" placeholder="Entre com um título" name="postId" />
          <input defaultValue={post.title} type="text" className="p-2 border rounded" placeholder="Entre com um título" name="title" />
        </div>
        <div className="flex flex-col">
          <label>Descrição</label>
          <textarea defaultValue={post.body} className="p-2 border rounded" placeholder="Digite aqui..." name="body"></textarea>
        </div>
      </div>
      <div
        className="
          p-4
          flex
          justify-end
        "
      >
        <button
          className="
            p-2
            bg-[#00D1CD]
            rounded
            text-white
            font-bold
          "
        >{pending ? "Carregando" : "Editar post"}</button>
      </div>
      {state.message && (
        <div
          className="p-4"
        >
          <ErrorMessage message={state.message} />
        </div>
      )}
    </form>
  );
}
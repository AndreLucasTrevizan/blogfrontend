"use client";

import { useActionState } from "react";
import { createComment } from "../_comments/actions";
import ErrorMessage from "./ErrorMessage";

const initialState = {
  message: ''
};

export default function FormComment({
  postId,
  setShowFormComment
}: {
  postId: number,
  setShowFormComment: () => void;
}) {
  const [state, formAction, pending] = useActionState(createComment, initialState);

  return (
    <form
      className="w-full flex flex-col gap-4"
      action={formAction}
    >
      <input type="text" name="postId" defaultValue={postId} hidden />
      <textarea
        name="body"
        className="
          w-full
          border
          p-2
          rounded
        "
        placeholder="Digite aqui o seu comentário"
      ></textarea>
      <div className="flex justify-between items-center">
        <button
          type="button"
          className="
            text-red-400
            font-bold
            hover:cursor-pointer
          "
          onClick={() => setShowFormComment()}
        >Cancelar</button>
        <button className="bg-[#00D1CD] p-2 rounded text-white font-bold">{pending ? "Carregando" : "Comentar"}</button>
      </div>
      {state?.message && (
        <ErrorMessage message={state.message} />
      )}
    </form>
  );
}
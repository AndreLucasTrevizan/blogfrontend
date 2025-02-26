"use client";

import { useActionState } from "react";
import { createPost } from "../posts/new/actions";
import ErrorMessage from "./ErrorMessage";

const initialState = {
  message: ''
};

export default function FormCreatePost() {
  const [state, formAction, pending] = useActionState(createPost, initialState);

  return (
    <form
      className="
        flex
        flex-col
        border
        rounded
      "
      action={formAction}
    >
      <div
        className="
          bg-stone-100
          p-4
        "
      >
        <span className="text-lg">O que vai postar hoje?</span>
      </div>
      <div
        className="p-4 flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <label>Título</label>
          <input type="text" className="p-2 border rounded" placeholder="Entre com um título" name="title" />
        </div>
        <div className="flex flex-col">
          <label>Descrição</label>
          <textarea className="p-2 border rounded" placeholder="Digite aqui..." name="body"></textarea>
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
            bg-blue-400
            rounded
            text-white
            font-bold
          "
        >{pending ? "Carregando" : "Criar post"}</button>
      </div>
      <div
        className="p-4"
      >
        {state.message && (
          <ErrorMessage message={state.message} />
        )}
      </div>
    </form>
  );
}
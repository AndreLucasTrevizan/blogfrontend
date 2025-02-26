"use client";

import Link from "next/link";
import { useActionState } from "react";
import { handleUserSignIn } from "../sign_in/actions";
import ErrorMessage from "./ErrorMessage";

const initialState = {
  message: "",
};

export default function FormSignIn() {
  const [state, formAction, pending] = useActionState(handleUserSignIn, initialState);

  return (
    <form
      className="
        p-4
        w-96
        flex
        gap-4
        flex-col
      "
      action={formAction}
    >
      <div className="text-center mb-4">
        <h1 className="text-lg">Acessar sistema</h1>
      </div>
      <div
        className="
          flex
          flex-col
        "
      >
        <label>E-mail</label>
        <input
          type="email"
          className="
            p-2
            border
            rounded
          "
          placeholder="Entre com seu e-mail"
          name="email"
        />
      </div>
      <div
        className="
          flex
          flex-col
        "
      >
        <label>Senha</label>
        <input
          type="password"
          className="
            p-2
            border
            rounded
          "
          placeholder="Entre com sua senha"
          name="password"
        />
      </div>
      <button
        className="
          bg-blue-400
          text-white
          font-bold
          py-2
          px-4
          hover:bg-blue-300
        "
      >{pending ? "Carregando" : "Entrar"}</button>
      <div className="text-center">
        <Link href={"/sign_up"} className="text-blue-400 font-bold text-sm">Criar conta</Link>
      </div>
      {state.message && (
        <ErrorMessage message={state.message}/>
      )}
    </form>
  );
}
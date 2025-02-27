"use client";

import Link from "next/link";
import { useActionState } from "react";
import { handleUserSignUp } from "../sign_up/actions";
import ErrorMessage from "./ErrorMessage";

const initialState = {
  message: ''
};

export default function FormSignUp() {
  const [state, formAction, pending] = useActionState(handleUserSignUp, initialState);

  return (
    <form
      className="
        p-4
        w-96
        flex
        gap-4
        flex-col
        bg-white
      "
      action={formAction}
    >
      <div className="text-center mb-4">
        <h1 className="text-lg">Criar Conta</h1>
      </div>
      <div
        className="
          flex
          flex-col
        "
      >
        <label>Nome</label>
        <input
          type="text"
          className="
            p-2
            border
            rounded
          "
          placeholder="Entre com seu nome"
          name="name"
        />
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
          bg-[#00D1CD]
          text-white
          font-bold
          py-2
          px-4
          hover:bg-blue-300
        "
      >{pending ? "Carregando" : "Criar conta"}</button>
      <div className="text-center">
        <Link href={"/sign_in"} className="text-[#00D1CD] font-bold text-sm">Já possuo conta</Link>
      </div>
      {state.message && (
        <ErrorMessage message={state.message}/>
      )}
    </form>
  );
}
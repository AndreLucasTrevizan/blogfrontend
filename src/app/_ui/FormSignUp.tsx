import Link from "next/link";

export default function FormSignUp() {
  return (
    <form
      className="
        p-4
        w-96
        flex
        gap-4
        flex-col
      "
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
      >Criar Conta</button>
      <div className="text-center">
        <Link href={"/sign_in"} className="text-blue-400 font-bold text-sm">Já possuo conta</Link>
      </div>
    </form>
  );
}
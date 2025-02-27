import { getUserDetails, sessionLogout, UserType } from "./actions";

export default async function Profile() {
  const user: UserType = await getUserDetails();
  
  return (
    <div
      className="
        p-4
        m-auto
        w-3/4
        flex
        flex-col
        gap-4
      "
    >
      <h1 className="text-lg">Perfil de usuário</h1>
      <div
        className="
          bg-white
          border
          rounded
          p-4
          flex
          flex-wrap
          gap-4
        "
      >
        <div className="flex flex-col gap-4 w-96">
          <div className="flex justify-between">
            <label>Nome</label>
            <span>{user.name}</span>
          </div>
          <div className="flex justify-between">
            <label>E-mail</label>
            <span>{user.email}</span>
          </div>
          <div
            className="flex justify-between"
          >
            <label>Criado em</label>
            <div className="w-max flex gap-4">
              <span>{new Date(user.createdAt).toLocaleDateString('pt-br')}</span>
              <span>{new Date(user.createdAt).toLocaleTimeString('pt-br')}</span>
            </div>
          </div>
          <div
            className="flex justify-between"
          >
            <label>Atualizado em</label>
            <div className="w-max flex gap-4">
              <span>{new Date(user.updatedAt).toLocaleDateString('pt-br')}</span>
              <span>{new Date(user.updatedAt).toLocaleTimeString('pt-br')}</span>
            </div>
          </div>
        </div>
        <form action={sessionLogout} className="flex flex-1 justify-end items-start">
          <button className="font-bold text-red-500">Encerrar seção</button>
        </form>
      </div>
    </div>
  );
}
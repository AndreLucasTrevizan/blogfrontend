import { getDateWithHour } from "../_api/date";
import { getUserDetails, sessionLogout, UserType } from "./actions";

export default async function Profile() {
  const user: UserType = await getUserDetails();
  
  return (
    <div
      className="
        md:p-4
        md:m-auto
        md:w-3/4
        p-2
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
        <div className="flex flex-wrap flex-col gap-4 w-96">
          <div className="flex flex-wrap justify-between">
            <label>Nome</label>
            <span className="text-gray-400">{user.name}</span>
          </div>
          <div className="flex flex-wrap justify-between">
            <label>E-mail</label>
            <span className="text-gray-400">{user.email}</span>
          </div>
          <div
            className="flex flex-wrap justify-between"
          >
            <label>Criado em</label>
            <div className="w-max flex gap-4 text-gray-400">
              {getDateWithHour(user.createdAt)}
            </div>
          </div>
          <div
            className="flex flex-wrap justify-between"
          >
            <label>Atualizado em</label>
            <div className="w-max flex gap-4 text-gray-400">
              {getDateWithHour(user.createdAt)}
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
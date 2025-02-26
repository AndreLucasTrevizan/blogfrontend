import { getUserDetails, UserType } from "./actions";

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
          flex-col
          gap-4
        "
      >
        <div>
          <span>{user.name}</span>
        </div>
        <span>{user.email}</span>
        <div
          className="flex gap-4"
        >
          <span>{new Date(user.createdAt).toLocaleDateString('pt-br')}</span>
          <span>{new Date(user.createdAt).toLocaleTimeString('pt-br')}</span>
        </div>
        <div
          className="flex gap-4"
        >
          <span>{new Date(user.updatedAt).toLocaleDateString('pt-br')}</span>
          <span>{new Date(user.updatedAt).toLocaleTimeString('pt-br')}</span>
        </div>
      </div>
    </div>
  );
}
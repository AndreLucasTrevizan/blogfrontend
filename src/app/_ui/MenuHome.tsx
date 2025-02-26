import Link from "next/link";
import { JSX } from "react";
import { FaComment, FaPlus, FaUser } from "react-icons/fa6";

interface MenuPropsType {
  route: string;
  name: string;
  icon: JSX.Element;
}

const menuProps: MenuPropsType[] = [
  {
    name: 'Criar Post',
    icon: <FaPlus size={25} />,
    route: '/posts/new'
  },
  {
    name: 'Minhas Postagens',
    icon: <FaComment size={25} />,
    route: '/my_posts'
  },
  {
    name: 'Perfil',
    icon: <FaUser size={25} />,
    route: '/profile'
  },
];

export default function MenuHome() {
  return (
    <div
      className="flex flex-wrap justify-between"
    >
      {menuProps.map((menuItem) => (
        <MenuItem key={menuItem.name} menuItem={menuItem} />
      ))}
    </div>
  );
}

function MenuItem({
  menuItem
}: {
  menuItem: MenuPropsType
}) {
  return (
    <Link
      className="
        flex
        flex-col
        p-4
        w-48
        bg-white
        rounded
        flex
        flex-col
        items-center
        gap-4
        hover:bg-blue-400
        hover:text-white
      "
      href={menuItem.route}
    >
      {menuItem.icon}
      <span>{menuItem.name}</span>
    </Link>
  );
}
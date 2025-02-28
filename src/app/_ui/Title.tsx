"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Title() {
  const pathname = usePathname();

  return (
    <div
      className="flex flex-col"
    >
      {pathname == "/sign_in" ? <span className="text-2xl">Blog</span> : pathname == "/sign_up" ? <span className="text-2xl">Blog</span> : <Link href="/" className="text-2xl w-max">Blog</Link>}
      <small className="hidden md:block">Desenvolvido por <Link className="hover:underline" href="https://github.com/AndreLucasTrevizan/" target="_blank">André Lucas Trevizan</Link></small>
    </div> 
  );
}
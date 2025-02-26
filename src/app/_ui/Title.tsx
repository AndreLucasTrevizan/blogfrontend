"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Title() {
  const pathname = usePathname();

  return (
    <div
      className="flex flex-col"
    >
      {pathname == "/sign_in" ? <span className="text-2xl">Blog</span> : pathname == "/sign_up" ? <span className="text-2xl">Blog</span> : <Link href="/" className="text-2xl">Blog</Link>}
      <small>Desenvolvido por André Lucas Trevizan</small>
    </div>
  );
}
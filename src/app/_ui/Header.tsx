"use client";

import { usePathname, useRouter } from "next/navigation";
import Title from "./Title";
import { FaChevronLeft } from "react-icons/fa6";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  
  return (
    <div
      className="
        flex
        justify-center
        items-center
        border-b-1
        bg-white
      "
    >
      <div
        className="
          md:w-3/4
          w-full
          p-4
        "
      >
        {pathname == "/sign_in" ? (
          <Title />
        ) : (
          pathname == "/" ? (
            <Title />
          ) : (
            <div
              className="flex justify-between"
            >
              <div className="flex gap-2 items-center hover:cursor-pointer" onClick={() => router.back()}>
                <FaChevronLeft size={10} />
                <span>Voltar</span>
              </div>
              <Title />
            </div>
          )
        )}
      </div>
    </div>
  );
}
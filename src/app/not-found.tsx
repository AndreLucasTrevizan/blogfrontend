import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="
        m-auto
        w-3/4
        p-4
        bg-white
        flex
        flex-col
        items-center
        justify-center
        gap-4
        mt-4
      "
    >
      <h2 className="text-2xl">Não encontramos a página solicitada</h2>
      <Link href="/" className="text-blue-400 font-bold">Voltar para o site</Link>
    </div>
  );
}
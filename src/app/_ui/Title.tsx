import Link from "next/link";

export default function Title() {
  return (
    <div
      className="flex flex-col"
    >
      <Link href="/" className="text-2xl">Blog</Link>
      <small>Desenvolvido por André Lucas Trevizan</small>
    </div>
  );
}
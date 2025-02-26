import Title from "./Title";

export default function Header() {
  return (
    <div
      className="
        flex
        justify-center
        items-center
        border-b-1
      "
    >
      <div
        className="
          w-3/4
          p-4
        "
      >
        <Title />
      </div>
    </div>
  );
}
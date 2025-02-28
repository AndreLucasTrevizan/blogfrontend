import { JSX } from "react";

export default function Pagination({
  amountOfPages,
  returnPage,
}: {
  amountOfPages: number,
  returnPage: (page: number) => void
}) {
  const buttons: JSX.Element[] = [];

  for(let page = 1; page <= amountOfPages; page++) {
    buttons.push(<ButtonPagination key={page} page={page} returnPage={returnPage} />);
  }

  return buttons;
}

function ButtonPagination({
  page,
  returnPage,
}: {
  page: number,
  returnPage: (page: number) => void
}) {
  return (
    <button
      className="size-8 p-2 flex items-center justify-center rounded bg-white text-[#00D1CD]"
      onClick={() => returnPage(page)}
    >
      {page}
    </button>
  );
}

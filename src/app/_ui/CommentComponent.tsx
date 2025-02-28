import { getDateWithHour } from "../_helper/date";
import { CommentType } from "../posts/[id]/actions";

export default function CommentComponent({
  comment
}: {
  comment: CommentType
}) {
  return (
    <div
      className="
        flex
        flex-col
        border
        rounded
        p-2
        bg-white
      "
    >
      <div
        className="
          flex
          flex-col
          text-sm
          font-bold
        "
      >
        <span>{comment.user.name}</span>
        <div
          className="
            flex
            gap-4
            mb-2
          "
        >
          <small>{getDateWithHour(comment.createdAt)}</small>
        </div>
      </div>
      <hr />
      <div
        className="py-2"
      >
        <p>{comment.body}</p>
      </div>
    </div>
  );
}
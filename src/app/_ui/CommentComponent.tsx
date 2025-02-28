import { getDateWithHour } from "../_api/date";
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
          {getDateWithHour(comment.createdAt)}
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
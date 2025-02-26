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
          <small>{new Date(comment.createdAt).toLocaleDateString('pt-br', {
            dateStyle: 'short'
          })}</small>
          <small>{new Date(comment.createdAt).toLocaleTimeString('pt-br', {
            hour: '2-digit',
            minute: '2-digit'
          })}</small>
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
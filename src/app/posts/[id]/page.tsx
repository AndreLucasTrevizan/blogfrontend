import { PostType } from "@/app/page";
import { CommentType, getCommentsByPost, getPostByID } from "./actions";
import PostComponent from "@/app/_ui/PostComponent";
import CommentComponent from "@/app/_ui/CommentComponent";

export default async function PostDetail({
  params
}: {
  params: Promise<{ id: number }>
}) {
  const post: PostType = await getPostByID((await params).id);
  const comments: CommentType[] = await getCommentsByPost((await params).id) ?? [];

  return (
    <div
      className="
        m-auto
        w-3/4
        p-4
        flex
        flex-col
        gap-4
      "
    >
      {post && (
        <PostComponent post={post} />
      )}
      {comments.length == 0 && (
        <div
          className="text-center"
        >
          <span className="text-sm">Nenhum comentário foi feito</span>
        </div>
      )}
      {comments.map(comment => (
        <CommentComponent key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
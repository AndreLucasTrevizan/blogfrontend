import { PostType } from "@/app/page";
import { getPostByID } from "../../[id]/actions";
import FormEditPost from "@/app/_ui/FormEditPost";

export default async function PostEdit({
  params
}: {
  params: Promise<{ id: number }>
}) {
  const post: PostType = await getPostByID((await params).id);

  return (
    <div
      className="
        md:m-auto
        md:w-3/4
        md:p-4
        p-2
        flex
        flex-col
        gap-4
      "
    >
      <FormEditPost post={post} />
    </div>
  );
}
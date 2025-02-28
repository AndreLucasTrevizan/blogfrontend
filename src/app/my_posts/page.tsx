import PostComponent from "../_ui/PostComponent";
import { PostType } from "../page";
import { getOwnPosts } from "./actions";

export default async function MyPosts() {
  const posts: PostType[] = await getOwnPosts();

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
      <h1 className="text-xl">Suas postagens</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostComponent key={post.id} post={post} />
        ))
      ) : (
        <div
          className="text-center"
        >
          <span className="text-sm">Você ainda não fez postagens</span>
        </div>
      )}
    </div>
  );
}
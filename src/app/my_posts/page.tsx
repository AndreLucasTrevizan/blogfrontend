import PostComponent from "../_ui/PostComponent";
import { PostType } from "../page";
import { getOwnPosts } from "./actions";

export default async function MyPosts() {
  const posts: PostType[] = await getOwnPosts();

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
      <h1 className="text-xl">Suas postagens</h1>
      {posts && (
        posts.map((post) => (
          <PostComponent key={post.id} post={post} />
        ))
      )}
    </div>
  );
}
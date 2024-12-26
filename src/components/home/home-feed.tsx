import { post } from "@/data/post";
import { PostItem, PostItemSkeleton } from "../post/post-item";

export const HomeFeed = () => {
  return (
    <div>
      <PostItem post={post} />
      <PostItemSkeleton />
      <PostItemSkeleton />
      <PostItemSkeleton />
    </div>
  );
};

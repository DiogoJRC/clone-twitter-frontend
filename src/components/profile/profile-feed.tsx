import { post } from "@/data/post";
import { PostItem, PostItemSkeleton } from "../post/post-item";

export const ProfileFeed = () => {
  return (
    <div className="pt-1">
      <PostItem post={post} />
      <PostItem post={post} />
      <PostItem post={post} />
      <PostItemSkeleton />
    </div>
  );
};

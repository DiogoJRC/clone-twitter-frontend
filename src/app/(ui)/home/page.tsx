import { HomeFeed } from "@/components/home/home-feed";
import { HomeHeader } from "@/components/home/home-header";
import { PostForm } from "@/components/post/post-form";

export default function Page() {
  return (
    <>
      <HomeHeader />
      <PostForm />
      <HomeFeed />
    </>
  );
}

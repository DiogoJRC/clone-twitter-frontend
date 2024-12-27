import { PostItem, PostItemSkeleton } from "@/components/post/post-item";
import { GeneralHeader } from "@/components/ui/general-header";
import { SearchInput } from "@/components/ui/search-input";
import { post } from "@/data/post";
import { redirect } from "next/navigation";

type Props = {
  searchParams: {
    q: string | undefined;
  };
};

export default function Page({ searchParams }: Props) {
  if (!searchParams) redirect("/");

  return (
    <>
      <GeneralHeader backHref="/">
        <SearchInput defaulValue={searchParams.q} />
      </GeneralHeader>
      <div className="border-t-2 border-gray-900">
        <PostItem post={post} />
        <PostItem post={post} />
        <PostItem post={post} />
        <PostItemSkeleton />
      </div>
    </>
  );
}

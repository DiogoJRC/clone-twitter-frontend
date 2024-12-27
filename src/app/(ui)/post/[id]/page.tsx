import { PostForm } from "@/components/post/post-form";
import { PostItem } from "@/components/post/post-item";
import { GeneralHeader } from "@/components/ui/general-header";
import { post } from "@/data/post";

export default function Page() {
  return (
    <>
      <GeneralHeader backHref="/">
        <div className="font-medium text-lg">Voltar</div>
      </GeneralHeader>
      <div className="boder-t-2 border-gray-900">
        <PostItem post={post} />
        <div className="border-y-8 border-gray-900">
          <PostForm />
        </div>
        <PostItem post={post} hideComments />
        <PostItem post={post} hideComments />
        <PostItem post={post} hideComments />
      </div>
    </>
  );
}

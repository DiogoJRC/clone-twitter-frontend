"use client";

import { Post } from "@/types/post";
import { formatRelativeTime } from "@/utils/format-relative";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

type Props = {
  post: Post;
  hideComments?: boolean;
};

export const PostItem = ({ post, hideComments }: Props) => {
  const [shared, setShared] = useState(post.shared);
  const [shareCount, setShareCount] = useState(post.shareCount);
  const [liked, setLiked] = useState(post.liked);
  const [likeCount, setLikeCount] = useState(post.likeCount);

  const sharePost = (e: any) => {
    e.preventDefault();
    const countChange = shared ? -1 : +1;

    setShared(!shared);
    setShareCount(shareCount + countChange);
  };

  const likePost = (e: any) => {
    e.preventDefault();
    const countChange = liked ? -1 : +1;

    setLiked(!liked);
    setLikeCount(likeCount + countChange);
  };

  return (
    <div className="flex items-start gap-3 p-6 border-b-2 border-gray-900">
      <Link href={`/${post.user.slug}`}>
        <img
          src={post.user.avatar}
          alt={post.user.name}
          className="size-12 rounded-full"
        />
      </Link>
      <div className="flex flex-col flex-1">
        <div className="flex flex-col flex-wrap mt-1 lg:flex-row lg:items-center lg:gap-x-2">
          <div className="text-lg font-medium">
            <Link href={`/${post.user.slug}`}>{post.user.name}</Link>
          </div>
          <div className="text-sm text-gray-500">
            @{post.user.slug} &bull;{" "}
            <Link
              href={`/post/${post.id}`}
              className="hover:underline hover:text-slate-500"
            >
              {formatRelativeTime(post.date)}
            </Link>
          </div>
        </div>
        <div className="py-4 text-lg">{post.body}</div>
        {post.image && (
          <img className="w-full rounded-2xl mb-4" src={post.image} alt="" />
        )}
        <div
          className={`${
            hideComments ? "w-2/4" : "w-3/4"
          } flex items-center justify-between text-gray-500`}
        >
          {!hideComments && (
            <Link href={`/post/${post.id}`} className="flex items-center gap-2">
              <FontAwesomeIcon icon={faComment} className="size-6" />{" "}
              {post.commentCount}
            </Link>
          )}
          <a
            href="#"
            className={`flex items-center gap-2 ${shared && "text-green-400"}`}
            onClick={sharePost}
          >
            <FontAwesomeIcon icon={faRetweet} className="size-6" /> {shareCount}
          </a>
          <a
            href="#"
            className={`flex items-center gap-2 ${liked && "text-red-400"}`}
            onClick={likePost}
          >
            <FontAwesomeIcon
              icon={liked ? faHeartSolid : faHeart}
              className="size-6"
            />{" "}
            {likeCount}
          </a>
        </div>
      </div>
    </div>
  );
};

export const PostItemSkeleton = () => {
  return (
    <div className="animate-pulse flex items-start gap-3 p-6 border-b-2 border-gray-900">
      <div className="size-12 rounded-full bg-gray-700"></div>
      <div className="flex flex-col flex-1">
        <div className="flex flex-col flex-wrap mt-1 gap-2 lg:flex-row lg:items-center lg:gap-x-2">
          <div className="bg-gray-700 w-3/5 h-5"></div>
          <div className="bg-gray-700 w-2/5 h-4"></div>
        </div>
        <div className="my-4 bg-gray-700 h-6"></div>
        <div className="w-full h-48 mb-4 rounded-2xl bg-gray-700"></div>
        {/* <div className="w-3/4 flex items-center justify-between text-gray-500">
          <div className="w-12 h-7 bg-gray-700"></div>
          <div className="w-12 h-7 bg-gray-700"></div>
          <div className="w-12 h-7 bg-gray-700"></div>
        </div> */}
      </div>
    </div>
  );
};

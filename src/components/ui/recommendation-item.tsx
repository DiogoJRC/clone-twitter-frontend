"use client";

import { User } from "@/types/user";
import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";

type Props = {
  user: User;
};

export const RecomendatioItem = ({ user }: Props) => {
  const [following, setFollowing] = useState(false);

  function handleFollowButton() {
    setFollowing(true);
  }

  return (
    <div className="flex items-center">
      <div className="size-10 mr-2 rounded-full overflow-hidden">
        <Link href={`/${user.slug}`}>
          <img src={user.avatar} alt={user.name} className="size-ful" />
        </Link>
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <Link href={`/${user.slug}`} className="truncate">
          {user.name}
        </Link>
        <div className="truncate text-sm text-gray-400">@{user.slug}</div>
      </div>
      <div className="pl-2 w-20">
        {!following && (
          <Button label="Seguir" onClick={handleFollowButton} size={3} />
        )}
      </div>
    </div>
  );
};

export const RecommendationItemEskeleton = () => {
  return (
    <div className="animate-pulse flex items-center">
      <div className="size-10 mr-2 bg-gray-700 rounded-full"></div>
      <div className="flex flex-col flex-1 gap-1">
        <div className="bg-gray-700 w-3/4 h-4"></div>
        <div className="bg-gray-700 w-1/4 h-4"></div>
      </div>
    </div>
  );
};

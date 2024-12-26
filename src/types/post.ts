import { User } from "./user";

export type Post = {
  id: number;
  date: Date;
  user: User;
  body: string;
  image?: string;
  likeCount: number;
  commentCount: number;
  shareCount: number;
  liked: boolean;
  shared: boolean;
};

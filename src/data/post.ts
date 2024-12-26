import { Post } from "@/types/post";
import { user } from "./user";

export const post: Post = {
  id: 123,
  date: new Date(2024, 11, 26, 17, 29, 0),
  user: user,
  body: "Outro dia mágico",
  image:
    "https://st3.depositphotos.com/2007501/14553/i/450/depositphotos_145538219-stock-photo-spring-field-at-beautiful-day.jpg",
  likeCount: 523,
  commentCount: 61,
  shareCount: 0,
  liked: true,
  shared: false,
};

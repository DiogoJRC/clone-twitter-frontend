import { user } from "@/data/user";
import {
  RecomendatioItem,
  RecommendationItemEskeleton,
} from "./recommendation-item";

export const RecommendationArea = () => {
  return (
    <div className="bg-gray-800 rounded-3xl p-6">
      <h2 className="text-xl mb-4 font-medium">Quem seguir</h2>
      <div className="flex flex-col gap-4">
        <RecomendatioItem user={user} />
        <RecommendationItemEskeleton />
      </div>
    </div>
  );
};

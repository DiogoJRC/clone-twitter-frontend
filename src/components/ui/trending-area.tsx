import { TrendingItem, TrendingItemEskeleton } from "./trending-item";

export const TrendingArea = () => {
  return (
    <div className="bg-gray-800 rounded-3xl p-6">
      <h2 className="text-xl mb-4 font-medium">O que está acontecendo</h2>
      <div className="flex flex-col gap-4">
        <TrendingItem label="#Teste" count={4} />
        <TrendingItem label="#Teste1" count={123} />
        <TrendingItemEskeleton />
        <TrendingItemEskeleton />
      </div>
    </div>
  );
};

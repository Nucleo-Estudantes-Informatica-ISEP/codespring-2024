import { InfiniteMovingCards } from "@/lib/components/ui/infinite-moving-cards";
import problemStats from "@/data/problem-stats.json";

const NewsCarrousel = () => {
  return (
    <div className=" relative flex h-[40rem] flex-col items-center justify-center overflow-hidden rounded-md antialiased">
      <h2 className="mb-4 text-center text-3xl font-bold md:text-5xl">
        Algumas notícias...
      </h2>
      <InfiniteMovingCards
        items={problemStats}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default NewsCarrousel;

import { InfiniteMovingCards } from "@/lib/components/ui/moving-cards";
import problemStats from "@/data/problem-stats.json";

const ProblemStats: React.FC = () => {
  return (
    <div className=" relative flex h-[40rem] flex-col items-center justify-center overflow-hidden rounded-md  antialiased ">
      <InfiniteMovingCards
        items={problemStats}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default ProblemStats;

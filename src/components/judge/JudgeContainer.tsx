import { AnimatedTooltip } from "@/lib/components/ui/animated-tooltip";
import judges from "@/data/judges.json";

export default function JuriContainer() {
  return (
    <div className="flex w-full items-center justify-center md:mb-10">
      <AnimatedTooltip items={judges} />
    </div>
  );
}

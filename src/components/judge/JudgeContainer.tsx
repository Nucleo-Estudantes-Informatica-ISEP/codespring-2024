import { AnimatedTooltip } from "@/lib/components/ui/animated-tooltip";
import judges from "@/data/judges.json";

export default function JuriContainer() {
  return (
    <div className="mb-10 flex w-full items-center justify-center">
      <AnimatedTooltip items={judges} />
    </div>
  );
}

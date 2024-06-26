import { Card, CardContent } from "@/lib/components/ui/card.tsx";
import { CarouselItem } from "@/lib/components/ui/carousel.tsx";
import type { Sponsor } from "@/components/sponsors/SponsorsInfo.ts";

interface SponsorCardProps {
  sponsor: Sponsor;
}

function SponsorCard(props: SponsorCardProps) {
  const sponsor: Sponsor = props.sponsor;

  return (
    <CarouselItem className="flex basis-1/2 select-none items-center justify-center md:basis-1/3">
      <Card className="size-44 rounded-lg border-slate-600 transition-all duration-500 dark:border-white md:size-64 md:hover:rounded-3xl">
        <a target="_blank" href={sponsor.href || ""}>
          <CardContent className="flex aspect-square items-center justify-center p-6 md:size-64">
            <img
              src={sponsor.img}
              alt={sponsor.alt}
              className={`${sponsor.style || ""} hidden dark:block`}
            />
            <img
              src={sponsor.imgLight || sponsor.img}
              alt={sponsor.alt}
              className={`${sponsor.style || ""} block dark:hidden`}
            />
          </CardContent>
        </a>
      </Card>
    </CarouselItem>
  );
}

export default SponsorCard;

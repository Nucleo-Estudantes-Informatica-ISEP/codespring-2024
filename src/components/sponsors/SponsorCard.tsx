import { useState } from "react";

import { Card, CardContent } from "@/lib/components/ui/card.tsx";
import { CarouselItem } from "@/lib/components/ui/carousel.tsx";
import type { Sponsor } from "@/components/sponsors/SponsorsInfo.ts";

interface SponsorCardProps {
  sponsor: Sponsor;
}

function SponsorCard(props: SponsorCardProps) {
  const sponsor: Sponsor = props.sponsor;
  const [theme, setTheme] = useState<string>("dark");
  // for now, default theme, but TO-DO: study how to get the theme from the localStorage

  return (
    <CarouselItem className="flex basis-1/2 select-none items-center md:basis-1/3">
      <Card className="rounded-lg transition-all duration-500 md:hover:rounded-3xl">
        <a target="_blank" href={sponsor.href || ""}>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <img
              src={theme == "dark" ? sponsor.img : sponsor.imgLight}
              alt={sponsor.alt}
              className={`${sponsor.style || ""}`}
            />
          </CardContent>
        </a>
      </Card>
    </CarouselItem>
  );
}

export default SponsorCard;

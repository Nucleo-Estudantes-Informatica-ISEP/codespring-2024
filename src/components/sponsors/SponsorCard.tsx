import type { Sponsor } from "@/components/sponsors/SponsorsInfo.ts";
import { Card, CardContent } from "@/lib/components/ui/card.tsx";
import { CarouselItem } from "@/lib/components/ui/carousel.tsx";
import { useState } from "react";

interface SponsorCardProps {
  sponsor: Sponsor;
}

function SponsorCard(props: SponsorCardProps) {

  const sponsor : Sponsor = props.sponsor;
  const [theme, setTheme] = useState<string>('dark');
  // for now, default theme, but TO-DO: study how to get the theme from the localStorage

  return (
    <CarouselItem
      className='basis-1/2 md:basis-1/3 flex items-center select-none'
    >
      <Card className='transition-all duration-500 rounded-lg md:hover:rounded-3xl'>
        <a
          target='_blank'
          href={sponsor.href || ''}
        >
          <CardContent className='flex aspect-square items-center justify-center p-6'>
            <img
              src={theme == 'dark' ? sponsor.img : sponsor.imgLight || sponsor.img}
              alt={sponsor.alt}
              className={`${sponsor.style || ''}`}
            />
          </CardContent>
        </a>
      </Card>
    </CarouselItem>
  );
}

export default SponsorCard;
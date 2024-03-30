import type { Sponsor } from "@/components/sponsors/SponsorsInfo.ts";
import { Card, CardContent } from "@/lib/components/ui/card.tsx";
import { CarouselItem } from "@/lib/components/ui/carousel.tsx";

interface SponsorCardProps {
  sponsor: Sponsor;
}

function SponsorCard(props: SponsorCardProps) {

  const sponsor : Sponsor = props.sponsor;

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
              src={sponsor.img}
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
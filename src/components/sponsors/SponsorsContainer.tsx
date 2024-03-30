import SponsorsInfo, { type Sponsor } from '@/components/sponsors/SponsorsInfo.ts';

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from'@/lib/components/ui/carousel.tsx';

import SponsorCard from "@/components/sponsors/SponsorCard.tsx";



function SponsorsContainer() {
  const sponsors: Sponsor[] = SponsorsInfo.getAllSponsors();

  return (
    <div className='flex justify-center w-full'>
      <Carousel className='w-full max-w-72 md:max-w-3xl lg:max-w-5xl'>
        <CarouselContent className='-ml-1'>
          {sponsors.map((sponsor, index) => (
            <SponsorCard sponsor={sponsor} key={index} />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>

  );
}

export default SponsorsContainer;
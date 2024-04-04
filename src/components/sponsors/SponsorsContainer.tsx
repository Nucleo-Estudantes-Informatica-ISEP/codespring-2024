import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from "@/lib/components/ui/carousel.tsx";
import SponsorCard from "@/components/sponsors/SponsorCard.tsx";
import {
  getAllSponsors,
  type Sponsor
} from "@/components/sponsors/SponsorsInfo.ts";

function SponsorsContainer() {
  const sponsors: Sponsor[] = getAllSponsors();

  return (
    <div className="flex w-full justify-center">
      <Carousel className="w-full max-w-80 md:max-w-3xl lg:max-w-6xl">
        <CarouselContent className="-ml-1">
          {sponsors.map((sponsor, index) => (
            <SponsorCard sponsor={sponsor} key={index} />
          ))}
        </CarouselContent>
        <CarouselPrevious className="block md:hidden" />
        <CarouselNext className="block md:hidden" />
      </Carousel>
    </div>
  );
}

export default SponsorsContainer;

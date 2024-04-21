import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from "@/lib/components/ui/carousel.tsx";
import SponsorCard from "@/components/sponsorsII/SponsorsCardII";
import {
  getAllInfo,
  type Sponsor
} from "@/components/sponsorsII/SponsorsInfoII";

function SponsorsContainerII() {
  const sponsors: Sponsor[] = getAllInfo();

  return (
    <div className="flex w-full justify-center">
      <Carousel className="w-full max-w-80 md:max-w-3xl lg:max-w-6xl">
        <CarouselContent className="-ml-1">
          {sponsors.map((sponsor, index) => (
            <SponsorCard sponsor={sponsor} key={index} />
          ))}
        </CarouselContent>
        <CarouselPrevious
          className={sponsors.length < 3 ? "hidden md:block" : ""}
        />
        <CarouselNext
          className={sponsors.length < 3 ? "hidden md:block" : ""}
        />
      </Carousel>
    </div>
  );
}

export default SponsorsContainerII;

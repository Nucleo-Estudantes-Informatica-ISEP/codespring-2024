export default class SponsorsInfo {
  public static getAllSponsors(): Sponsor[] {
    return [
      { img: "/logo/deloitte-white.png", imgLight: "/logo/deloitte.webp", alt: "Deloitte Logo", href: "https://www2.deloitte.com/pt/pt.html" },
      { img: "/logo/blackroute.png", alt: "Blackroute Logo", href: "", style: "rounded-3xl" },
      { img: "/logo/LogoCriticalSoftware.png", alt: "Critical Software Logo", href: "https://www.criticalsoftware.com/pt" },
    ];
  }
}

export interface Sponsor {
  img: string;
  imgLight?: string;
  alt: string;
  style?: string;
  href?: string;
}
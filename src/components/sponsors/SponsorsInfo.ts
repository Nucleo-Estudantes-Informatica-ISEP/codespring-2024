export default class SponsorsInfo {
  public static getAllSponsors(): Sponsor[] {
    return [
      { img: "/logo/deloitte-white.png", imgLight: "/logo/deloitte.webp", alt: "Deloitte Logo", href: "https://www2.deloitte.com/pt/pt.html" },
      { img: "/logo/critical_software_main_logo.png", alt: "Critical Software Logo", href: "https://www.criticalsoftware.com/pt" },
      { img: "/logo/redBull.png", alt: "RedBull Logo", href: "https://www.redbull.com/pt-pt/" },
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
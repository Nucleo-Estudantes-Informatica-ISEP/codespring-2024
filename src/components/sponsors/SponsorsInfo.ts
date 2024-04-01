export default class SponsorsInfo {
  public static getAllSponsors() : Sponsor[] {
    return [
        {img: "/logo/DELOITTE_DARK.jpg", imgLight: "/logo/DELOITTE_LIGHT.jpg", alt: "NO IMAGE"},
        {img: "/logo/DELOITTE_DARK.jpg", imgLight: "/logo/DELOITTE_LIGHT.jpg", alt: "NO IMAGE"},
        {img: "/logo/DELOITTE_DARK.jpg", imgLight: "/logo/DELOITTE_LIGHT.jpg", alt: "NO IMAGE"},
        {img: "/logo.png", alt: "NO IMAGE"},
        {img: "/logo.png", alt: "NO IMAGE"},
        {img: "/logo.png", alt: "NO IMAGE"},
        {img: "/nei-logo.webp", alt: "NO IMAGE", style: "invert dark:invert-0"},
        {img: "/nei-logo.webp", alt: "NO IMAGE", style: "invert dark:invert-0"},
        {img: "/nei-logo.webp", alt: "NO IMAGE", style: "invert dark:invert-0"},
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
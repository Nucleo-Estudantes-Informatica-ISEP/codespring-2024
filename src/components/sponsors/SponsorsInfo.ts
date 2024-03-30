export default class SponsorsInfo {
  public static getAllSponsors() : Sponsor[] {
    return [
        {img: "/nei-logo.webp", alt: "NO IMAGE", style: "invert dark:invert-0"},
        {img: "/nei-logo.webp", alt: "NO IMAGE", style: "invert dark:invert-0"},
        {img: "/nei-logo.webp", alt: "NO IMAGE", style: "invert dark:invert-0"},
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
  alt: string;
  style?: string;
  href?: string;
}
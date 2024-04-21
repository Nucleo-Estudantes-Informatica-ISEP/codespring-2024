export const getAllInfo = (): Sponsor[] => {
  return [
    {
      img: "/logo/isep.png",
      alt: "ISEP Logo",
      href: "https://www.isep.pt/"
    },
    {
      img: "/logo/aeisep.png",
      alt: "AEIsep Logo",
      href: "https://www.aeisep.pt/"
    },
    {
      img: "/logo/dei.png",
      alt: "DEI Logo",
      href: "https://www.dei.isep.ipp.pt/"
    },
    {
      img: "/logo/redBull.png",
      alt: "RedBull Logo",
      href: "https://www.redbull.com/"
    },
    {
      img: "/logo/dominos.png",
      alt: "Dominos Logo",
      href: "https://www.dominos.pt/"
    },
    {
      img: "/logo/vitalis.png",
      alt: "Vitalis Logo",
      href: "https://www.vitalis.pt/"
    },
    {
      img: "/logo/divinal.png",
      alt: "Divinal Logo",
      href: "https://www.divinal.pt/"
    },
    {
      img: "/logo/lusoImpress.png",
      alt: "LusoImpress Logo",
      href: "https://lusoimpress.com/"
    }
  ];
};

export interface Sponsor {
  img: string;
  imgLight?: string;
  alt: string;
  style?: string;
  href?: string;
}

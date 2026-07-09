export type Reel = {
  id: string;
  /** Direct MP4 URL (premium) or Instagram reel permalink (luxury). */
  videoSrc?: string;
  poster?: string;
};

export const premiumReels: Reel[] = [
 { id: "premium-reel-1",videoSrc: "https://www.instagram.com/reel/DYZullap9LC/?igsh=MW4xMXV2Y3R1Z2NvOQ=="  },
  { id: "premium-reel-2",videoSrc: "https://www.instagram.com/reel/DWgwNhvCWo1/?igsh=MW9nNmxzMjFiZGNmcA=="  },
  { id: "premium-reel-3",videoSrc: "https://www.instagram.com/reel/DJ-6vxdyvmd/?igsh=MWw4cXpkaWpteGFsMA=="  },
  { id: "premium-reel-4",videoSrc: "https://www.instagram.com/reel/DPoBP4pCYua/?igsh=aDkyZ3R1aGR6cjdv"  },
  { id: "premium-reel-5", videoSrc: "https://www.instagram.com/reel/DTPZZaqkfrU/?igsh=cWgzdGRzYzV2cjdz" },
];

export const luxuryReels: Reel[] = [
  { id: "luxury-reel-1",videoSrc: "https://www.instagram.com/reel/DYZullap9LC/?igsh=MW4xMXV2Y3R1Z2NvOQ=="  },
  { id: "luxury-reel-2",videoSrc: "https://www.instagram.com/reel/DWgwNhvCWo1/?igsh=MW9nNmxzMjFiZGNmcA=="  },
  { id: "luxury-reel-3",videoSrc: "https://www.instagram.com/reel/DJ-6vxdyvmd/?igsh=MWw4cXpkaWpteGFsMA=="  },
  { id: "luxury-reel-4",videoSrc: "https://www.instagram.com/reel/DPoBP4pCYua/?igsh=aDkyZ3R1aGR6cjdv"  },
  { id: "luxury-reel-5", videoSrc: "https://www.instagram.com/reel/DTPZZaqkfrU/?igsh=cWgzdGRzYzV2cjdz" },
];
export const reelsTheme = {
  premium: {
    headingColor: "#F58220",
    bodyColor: "#555555",
    handleColor: "#F79440",
    arrowColor: "#FFFFFF",
    arrowBg: "#555555",
    arrowBorder: "rgba(247, 148, 64, 0.3)",
    cardBg: "#221F1E",
  },
  luxury: {
    headingColor: "#D3B898",
    bodyColor: "#FFFFFF",
    handleColor: "#D3B898",
    arrowColor: "#070604",
    arrowBg: "#D3B898",
    arrowBorder: "rgba(211, 184, 152, 0.3)",
    cardBg: "#221F1E",
  },
} as const;
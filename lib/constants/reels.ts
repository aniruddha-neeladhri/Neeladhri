export type Reel = {
  id: string;
  videoSrc?: string;
  poster?: string;
};

export const premiumReels: Reel[] = [
  { id: "premium-reel-1", videoSrc: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/829477ab-400e-48ef-aa32-f982d5dd9524.mp4" },
  { id: "premium-reel-2", videoSrc: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/829477ab-400e-48ef-aa32-f982d5dd9524.mp4" },
  { id: "premium-reel-3", videoSrc: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/829477ab-400e-48ef-aa32-f982d5dd9524.mp4" },
  { id: "premium-reel-4", videoSrc: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/829477ab-400e-48ef-aa32-f982d5dd9524.mp4" },
  { id: "premium-reel-5", videoSrc: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/829477ab-400e-48ef-aa32-f982d5dd9524.mp4" },
  { id: "premium-reel-6", videoSrc: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/829477ab-400e-48ef-aa32-f982d5dd9524.mp4" },
  { id: "premium-reel-7", videoSrc: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/829477ab-400e-48ef-aa32-f982d5dd9524.mp4" },
];

export const luxuryReels: Reel[] = [
  { id: "luxury-reel-1",videoSrc: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/829477ab-400e-48ef-aa32-f982d5dd9524.mp4"  },
  { id: "luxury-reel-2",videoSrc: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/829477ab-400e-48ef-aa32-f982d5dd9524.mp4"  },
  { id: "luxury-reel-3",videoSrc: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/829477ab-400e-48ef-aa32-f982d5dd9524.mp4"  },
  { id: "luxury-reel-4",videoSrc: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/829477ab-400e-48ef-aa32-f982d5dd9524.mp4"  },
  {id: "luxury-reel-5",videoSrc: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/829477ab-400e-48ef-aa32-f982d5dd9524.mp4"  },
  {id: "luxury-reel-6",videoSrc: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/829477ab-400e-48ef-aa32-f982d5dd9524.mp4"  },
  {id: "luxury-reel-7",videoSrc: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/blog/829477ab-400e-48ef-aa32-f982d5dd9524.mp4"  },
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
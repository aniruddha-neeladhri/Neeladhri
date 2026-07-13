export type Reel = {
  id: string;
  /** Direct MP4 URL (premium) or Instagram reel permalink (luxury). */
  videoSrc?: string;
  poster?: string;
};

export const premiumReels: Reel[] = [
 { id: "premium-reel-1",videoSrc:  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/a2175cd1-b1cf-48dc-8b39-8cf853327c2f.mp4" },
  { id: "premium-reel-2",videoSrc:  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/46dfca35-34be-4109-8480-d0e14ec8a82d.mp4"  },
  { id: "premium-reel-3",videoSrc:  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/04156481-2d1a-46a6-bc3a-e8e4ff75d2e5.mp4"},
  { id: "premium-reel-4",videoSrc:  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/c5460795-f0b9-4549-a5b0-dc0d728d62d6.mp4" },
  { id: "premium-reel-5", videoSrc:  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/b0b05967-5114-41b7-a8c8-478b8d95a70b.mp4" },
];

export const luxuryReels: Reel[] = [
  { id: "luxury-reel-1",videoSrc: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/a2175cd1-b1cf-48dc-8b39-8cf853327c2f.mp4" },
  { id: "luxury-reel-2",videoSrc:  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/46dfca35-34be-4109-8480-d0e14ec8a82d.mp4"  },
  { id: "luxury-reel-3",videoSrc:  "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/04156481-2d1a-46a6-bc3a-e8e4ff75d2e5.mp4"},
  { id: "luxury-reel-4",videoSrc:"https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/c5460795-f0b9-4549-a5b0-dc0d728d62d6.mp4" },
  { id: "luxury-reel-5", videoSrc: "https://pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev/home/b0b05967-5114-41b7-a8c8-478b8d95a70b.mp4" },
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
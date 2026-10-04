export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Can You Find Everything Wiki",
  shortName: "Can You Find Everything",
  logoText: "C",
  tagline: "Hidden Object Locations, Area Guides & Walkthroughs",
  description: "Your ultimate guide to Can You Find Everything on Roblox! Explore hidden object locations, area walkthroughs, secrets, tips and completion guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://can-you-find-everything.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://can-you-find-everything.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/5600975759/Can-You-Find-Everything",
  heroVideoId: "MNqAKOGlN6E", // Can You Find Everything Roblox hard items location guide
  social: {
    youtube: "https://www.youtube.com/watch?v=MNqAKOGlN6E",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};

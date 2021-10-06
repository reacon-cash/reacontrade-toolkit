import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.Reaconswap.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://Reaconswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.Reaconswap.finance/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.Reaconswap.finance/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://Reaconswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.Reaconswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.Reaconswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.Reaconswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/Reaconswap",
      },
      {
        label: "Documentation",
        href: "https://docs.Reaconswap.finance",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@Reaconswap-1/s/Reaconswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.Reaconswap.finance/help/faq#is-Reaconswap-safe-has-Reaconswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.Reaconswap.finance/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/Reaconswap",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/Reaconswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/ReaconSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/ReaconSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/ReaconSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/Reaconswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/Reaconswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/Reaconswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/ReaconSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/ReaconswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/Reaconswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/Reaconswapfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/ReaconSwapAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/ReaconSwapWhales",
      },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://reddit.com/r/Reaconswap",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://instagram.com/Reaconswap_official",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/Reaconswap/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));

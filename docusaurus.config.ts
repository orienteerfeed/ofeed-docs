import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "OFeed documentation",
  tagline: "Handle all orienteering event data in one place",
  favicon:
    "img/ico/2025-04-24_orienteerfeed_favicon_light_transparent_32x32.png",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://docs.orienteerfeed.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "orienteerfeed", // Usually your GitHub org/user name.
  projectName: "ofeed-docs", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "cs"],
    localeConfigs: {
      cs: { label: "Čeština", direction: "ltr", translate: true },
    },
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/orienteerfeed/ofeed-docs/blob/main/",
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ["rss", "atom"],
        //     xslt: true,
        //   },
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        // editUrl:
        //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // Useful options to enforce blogging best practices
        // onInlineTags: "warn",
        // onInlineAuthors: "warn",
        // onUntruncatedBlogPosts: "warn",
        //},
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/ico/2025-04-11_orienteerfeed_logo_48x48px_logo_favicon.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#000",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "/img/ico/2025-04-11_orienteerfeed_logo_48x48px_logo_favicon.png",
          },
          {
            tagName: "link",
            rel: "mask-icon",
            href: "/img/svg/2025-04-11_orienteerfeed_48x48px_dark.svg",
            color: "rgb(37, 194, 160)",
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            content:
              "/img/ico/2025-04-11_orienteerfeed_logo_48x48px_logo_favicon.png",
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#000",
          },
        ],
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "OFeed",
      logo: {
        alt: "OFeed Logo",
        src: "img/svg/2025-04-24_orienteerfeed_logo_24x24px_logo_favicon_dark.svg",
        srcDark:
          "img/svg/2025-04-24_orienteerfeed_logo_24x24px_logo_favicon_light.svg",
      },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "Tutorial",
        // },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/orienteerfeed/ofeed",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
          dropdownItemsAfter: [
            {
              to: "https://orienteerfeed.com/help-us-translate",
              label: "Help us translate",
            },
          ],
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Tutorial",
        //       to: "/docs/intro",
        //     },
        //   ],
        // },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/QMvnurgKzU",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Orienteerfeed.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    metadata: [
      { name: "og:title", content: "Official OFeed docs" },
      { name: "og:description", content: "Documentation for OFeed platform" },
      {
        name: "og:image",
        content:
          "https://docs.orienteerfeed.com/cs/img/svg/2025-04-24_orienteerfeed_logo_24x24px_logo_favicon_dark.svg",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;

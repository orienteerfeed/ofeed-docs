import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "OFeed documentation",
  tagline: "Handle all orienteering event data in one place",

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
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "siDroidManual",
        path: "si-droid-event",
        routeBasePath: "si-droid-event",
        sidebarPath: "./sidebars-si-droid-manual.ts",
        editUrl: "https://github.com/orienteerfeed/ofeed-docs/blob/main/",
      },
    ],
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
            content: "rgba(255, 255, 255, 1)",
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
            color: "rgba(255, 255, 255, 1)",
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
    image: "img/ofeed-social-card.jpg",
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
        {
          to: "/si-droid-event/manual/intro",
          position: "left",
          label: "SI Droid Event",
        },
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
              to: "https://docs.orienteerfeed.com/contribute#translating",
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
      { name: "og:title", content: "OFeed documentation" },
      {
        name: "og:description",
        content: "Official documentation for OFeed platform",
      },
      {
        name: "og:image",
        content:
          "https://docs.orienteerfeed.com/cs/img/svg/2025-04-24_orienteerfeed_logo_24x24px_logo_favicon_dark.svg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "orienteering, orienteering events, orienteering entries, live results, split times, GPS tracking, real-time race data, OrienteerFeed, race synchronization, timing, o-results, o-races, orienteering maps, route tracking, orientační běh, orientační závody, výsledky OB, mezičasy, GPS tracking OB",
      },
      { name: "author", content: "Lukáš Kettner" },
      { name: "robots", content: "index, follow" },
    ],
  } satisfies Preset.ThemeConfig,
  headTags: [
    // Declare some json-ld structured data
    {
      tagName: "script",
      attributes: {
        type: "application/ld+json",
      },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org/",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://orienteerfeed.com/#organization",
            name: "OrienteerFeed",
            url: "https://orienteerfeed.com/",
            logo: {
              "@type": "ImageObject",
              url: "https://docs.orienteerfeed.com/img/svg/2025-04-11_orienteerfeed_512x512px_light.svg",
            },
            sameAs: [
              "https://github.com/orienteerfeed",
              "https://docs.orienteerfeed.com/",
            ],
            founder: {
              "@type": "Person",
              name: "Martin Křivda",
            },
          },
          {
            "@type": "WebSite",
            "@id": "https://orienteerfeed.com/#website",
            url: "https://orienteerfeed.com/",
            name: "OrienteerFeed",
            description:
              "Live orienteering results and real-time competition data",
            publisher: {
              "@id": "https://orienteerfeed.com/#organization",
            },
          },
        ],
      }),
    },
  ],
  clientModules: ["./src/clientModules/faviconSwitcher.ts"],

  markdown: {
    mermaid: true,
  },
  themes: [
    "@docusaurus/theme-mermaid",
    [
      "@cmfcmf/docusaurus-search-local",
      {
        language: "en",
        indexDocs: true,
        indexBlog: false,
      },
    ],
  ],
};

export default config;

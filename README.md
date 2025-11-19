<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/orienteerfeed/ofeed-docs/main/static/img/svg/2025-08-18_orienteerfeed_logo_one-line_dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/orienteerfeed/ofeed-docs/main/static/img/svg/2025-08-18_orienteerfeed_logo_one-line_light.svg">
  <img alt="Shows a black logo in light color mode and a white one in dark color mode." src="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
</picture>

# About

Official documentation for the `OFeed` platform, which includes an introduction to basic concepts and tutorials of the main features.

# Join our Discord server

Become part of our community by clicking the link! We're excited to have you with us. Feel free to ask for help or share your experiences.

[![](https://dcbadge.limes.pink/api/server/https://discord.gg/QMvnurgKzU)](https://discord.gg/QMvnurgKzU)

# List of events that used OFeed

- 18.10.2025 [Oblastní žebříček (KAM)](https://orienteerfeed.com/events/cmg4t3f0i0007my3m5hh50wl2) - MRB + OChecklist integration
- 11.10.2025 [Východočeský pohár (CHC)](https://orienteerfeed.com/events/cmgkvtqvt000rmy3mh3j4mjer) - MRB + OChecklist integration
- 29.06.2025 [Veteraniáda ČR na krátké trati (SHK)](https://orienteerfeed.com/events/cmcg4c97z0001qz3k2mvgg20t) - just MRB
- 28.06.2025 [Veteraniáda ČR na klasické trati, oblastní žebříček (SHK)](https://orienteerfeed.com/events/cmcg25zom000fqz3ow8sfy0o5) - just MRB
- 18.05.2025 [Oblastní žebříček (KAM)](https://orienteerfeed.com/events/cmanymbnb0007qq3e8zg7lny0) - MRB + OChecklist integration
- 18.05.2025 [Grant Thornton Mistrovství ČR sprintových štafet (KAM)](https://orienteerfeed.com/events/cmanykesl0004qq3eqbouls6q) - just MRB
- 17.05.2025 [Grant Thornton Mistrovství ČR ve sprintu (KAM)](https://orienteerfeed.com/events/cmanygkd60001qq3e5y5hqndm) - MRB + OChecklist integration

## Installation

```bash
pnpm install
```

## Local Development

```bash
pnpm start
```

This command starts a local development server and opens up a browser window in **default language** without other translations. Most changes are reflected live without having to restart the server.

### Locale

```bash
$ pnpm start -- --locale cs
```

Run another language, e.g. `cs`

**Warning**
Each locale is a **distinct standalone single-page application**: it is not possible to start the Docusaurus sites in **all locales** at the same time.

#### Extract strings for translation

```bash
pnpm run write-translations -- --locale cs
```

Scans the site for translatable strings (e.g., in docs, blog, UI labels). Writes them into JSON files under the i18n/<locale>/docusaurus-plugin-content-docs/current.json and similar paths.

## Build

```bash
pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Testing your Build Locally

It is important to test your build locally before deploying it for production.

```bash
pnpm run serve
```

## Deployment

Using SSH:

```bash
USE_SSH=true pnpm deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> pnpm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

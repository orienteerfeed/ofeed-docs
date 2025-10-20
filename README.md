<h1 align="center">
  <a href="https://orienteerfeed.com">
  <img src="https://raw.githubusercontent.com/orienteerfeed/ofeed-docs/main/static/img/svg/2025-08-18_orienteerfeed_logo_one-line_light.svg" width="400" alt="OFeed">
  </a>
</h1>

# About
Official documentation for the `OFeed` platform, which includes an introduction to basic concepts and tutorials on the main features.

# Join our Discord server
Become part of our community by clicking the link! We're excited to have you with us. Feel free to ask for help or share your experiences.

[![](https://dcbadge.limes.pink/api/server/https://discord.gg/QMvnurgKzU)](https://discord.gg/QMvnurgKzU)

# List of events that used OFeed
- 18.10.2025 [Oblastní žebříček (KAM)](https://orienteerfeed.com/event/cmg4t3f0i0007my3m5hh50wl2) - MRB + OChecklist integration
- 11.10.2025 [Východočeský pohár (CHC)](https://orienteerfeed.com/event/cmgkvtqvt000rmy3mh3j4mjer) - MRB + OChecklist integration
- 29.06.2025 [Veteraniáda ČR na krátké trati (SHK)](https://orienteerfeed.com/event/cmcg4c97z0001qz3k2mvgg20t) - just MRB
- 28.06.2025 [Veteraniáda ČR na klasické trati, oblastní žebříček (SHK)](https://orienteerfeed.com/event/cmcg25zom000fqz3ow8sfy0o5) - just MRB
- 18.05.2025 [Oblastní žebříček (KAM)](https://orienteerfeed.com/event/cmanymbnb0007qq3e8zg7lny0) - MRB + OChecklist integration
- 18.05.2025 [Grant Thornton Mistrovství ČR sprintových štafet (KAM)](https://orienteerfeed.com/event/cmanykesl0004qq3eqbouls6q) - just MRB
- 17.05.2025 [Grant Thornton Mistrovství ČR ve sprintu (KAM)](https://orienteerfeed.com/event/cmanygkd60001qq3e5y5hqndm) - MRB + OChecklist integration

# Installation

```
$ npm install
```

## Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

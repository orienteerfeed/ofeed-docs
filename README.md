<h1 align="center">
  <a href="https://orienteerfeed.com">
  <img src="https://raw.githubusercontent.com/orienteerfeed/ofeed-docs/main/static/img/svg/2025-08-18_orienteerfeed_logo_one-line_light.svg" width="400" alt="OFeed">
  </a>
</h1>

# About
Official documentation for the OFeed platform, which includes an introduction to basic concepts and tutorials on the main features.

# Join our Discord server
Become part of our community by clicking the link! We're excited to have you with us. Feel free to ask for help or share your experiences.

[![](https://dcbadge.limes.pink/api/server/https://discord.gg/QMvnurgKzU)](https://discord.gg/QMvnurgKzU)

# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```
$ yarn
```

## Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```
$ yarn build
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

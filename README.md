[![Website](/github-card.svg)](https://arthursegato.dev)
[![Uptime](https://img.shields.io/website?url=https%3A%2F%2Farthursegato.dev)](https://img.shields.io/website?url=https%3A%2F%2Farthursegato.dev)
[![HSTS Status](https://img.shields.io/hsts/preload/arthursegato.dev)](https://img.shields.io/hsts/preload/arthursegato.dev)
[![Mozilla HTTP Observatory](https://img.shields.io/mozilla-observatory/grade/arthursegato.dev?publish)](https://img.shields.io/mozilla-observatory/grade/arthursegato.dev?publish)
[![bun-build](https://github.com/ArthurSegato/portfolio-frontend/actions/workflows/workflow.yml/badge.svg)](https://github.com/ArthurSegato/portfolio-frontend/actions/workflows/workflow.yml)

[arthursegato.dev](https://www.arthursegato.dev/) serves as my portfolio, showcasing a extensive collection of my projects, including those that can't be uploaded to GitHub, such as videos and other multimedia content.

It's build with Vue3/Nuxt3 and deployed across the Vercel Edge network.

## Data protection legislations (GDPR, LGPD and others)

By acessing arthursegato.dev, there are two distinct occasions where user data is collected. In the first instance, technical data is gathered anonymously (as shown below) by [Vercel Web Analytics](https://vercel.com/docs/analytics) via a JS script, which can be easily blocked by any ad-blocking extension.

![Vercel Web Analytics Dashboard](/vercel-card.jpg "Vercel Web Analytics Dashboard")

The second instance happens when the user inputs any data into the contact form and submit it. In this case, the content entered into the form is directly sent to a text channel on my personal Discord server, **accessible only by me** (as illustrated below), via a webhook.

![My Discord private server](/discord-card.jpg "My Discord private server")

**If the user wishes to delete their data, they can simply reach out to me through any available channel on my GitHub profile, [personal website](arthursegato.dev) _(The data removal request will also be deleted)_, or via email at github.reentry594@passinbox.com**

## Requirements

- Bun v1.0.14 and above **OR** Node v21.2.0 and above

## Environment variables

.env variables for this project:

```Properties
NUXT_EASTEREGG_WEBHOOK=""
NUXT_CONTACT_WEBHOOK=""
NUXT_GITHUB_KEY=""
NUXT_YOUTUBE_KEY=""
POSTGRES_URL=""
```

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

## Disclaimer

Below is a list of all the assets used in the development of this website with their respective licenses.

- [BootStrapp Icons](https://icons.getbootstrap.com) ([MIT](https://github.com/twbs/icons/blob/main/LICENSE.md))
- [Inter](https://fonts.google.com/specimen/Inter) ([Open Font License](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL))

## Contributors

- [@ArthurSegato](https://github.com/ArthurSegato)

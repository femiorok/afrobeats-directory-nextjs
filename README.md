# Afrobeats Directory

**What Is This App For?**

This app, built on top of the Spotify API, serves as a resource to listen to and explore African music. Considering how large the continent is, technological support for our home-grown music genres is surprisingly small. This app addresses this problem by serving as an easy resource to dig deeper and find new music.

Key features include (italics = feature in progress):
* Viewing popular songs 
* Exploring playlists that are popular
* *Finding music recommendations*
* *Discovering little-played songs that are on the rise*
* *Connecting your Spotify account to listen to music right from the app*

**How Was It Built?**

The app was build via the following tech stack (italics = this will be implemented in the future):

* React
* Node/Next JS
* Tailwind CSS
* Google Firebase
* *PostgreSQL*
* *Prisma ORM*

**What Challenges Did You Face While Building This?**

This is actually the second iteration of the app. Initially, the app was built with a vanilla React + Node server. This was so that the app could easily implement Spotify's required OAuth2 flow. 

However, this was inefficient. For one, not all endpoints used by the app needed user credentials to access the data (e.g. the search endpoint). Secondly, load times were significant since some expensive calculations had to be run (sorting the top 100 songs) before the page could render. These calculations also were lost on each render. Thus, two workarounds were implemented: 1) saving the top 100 songs to a database via a cloud function/chron job 2) migrating the app to Next JS, and calling database data via getStaticProps so that the page was ready to go at build time. 

**What Features Are In The Pipeline?**

The following features are planned to be added over the next couple weeks: 

* Music Playback 
* Logging In & Adding Songs/Playlists To Library
* Top 50+ Songs Per Country
* Top Songs Per Genre 
* Worldwide Top African Songs 

**How Can I Clone And Run This Myself?**

*Coming Soong*


# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
pnpm create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

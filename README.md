# Pokedex

This is Pokedex app built with NextJS, Typescript and Tailwindcss
!!! Attention: `apps/pokedex-redux` is page router and `apps/pokedex` is web router
Because the module `next-redux-wrapper` is only available for pages router of NextJS application, `pokedex-redux` is built with pages router and `@mui/x-data-grid` is used for first page

## Run this project

This project uses pnpm@8.9.0 for package manager
You should install this by running this command before run the project

```sh
npm install -g pnpm@8.9.0
```

Run the following command:

```sh
npm install -g turbo
pnpm install
pnpm dev
```

or you can run the project by docker

```sh
docker compose up -d
```

Then you can browse the example apps on [Pokedex-redux](http://localhost:3000) and [Pokedex](http://localhost:3001)

And this project contains storybook for shared components defined in `@repo/ui` package
Storybook is defined in `@repo/web` (apps/pokedex)

```sh
pnpm storybook
```

Then you can browse the storybook on [Storybook](http://localhost:6006)

## What kind of this project?

This project is monorepo powered by [Turborepo](http://turbo.build) including apps and packages
They share config files for typescript, eslint, tailwindcss

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web (apps/pokedex-redux)`: a [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/) in Pages router with next-redux-wrapper and @reduxjs/toolkit
- `pokedex (apps/pokedex)`: another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/) in App router with @tanstack/react-query and storybook
- `@repo/ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/) shared by both `pokedex-redux` and `pokedex` applications
- `@repo/types`: an ESM module with type definition with typescript shared by whole project
- `@repo/utils`: a stub NodeJS library with Typescript shared by both `pokedex-redux` and `pokedex` applications
- `@repo/eslint-config (packages/config-eslint)`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config (packages/config-typescript)`: `tsconfig.json`s used throughout the monorepo
- `@repo/tailwind-config (packages/config-tailwind)`: `tailwind.config.ts`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

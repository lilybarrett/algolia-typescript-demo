# Demo with TypeScript, Algolia, and Yarn Workspaces

Monorepo for Algolia demo

## Getting started

If you're cloning this down, you'll need to add a `config.ts` file in your `algolia-sdk` folder to include your `appId` and `adminKey` from your Algolia account.

```
export type AlgoliaConfig = {
    appId: string;
    adminKey: string;
};

export const CONFIG: AlgoliaConfig = {
    appId: REPLACE_THIS_WITH_YOUR_APP_ID,
    adminKey: REPLACE_THIS_WITH_YOUR_ADMIN_KEY,
};
```

This project makes use of `yarn` workspaces. From the root of the project, install all of the dependencies with:

`yarn install`

You can now navigate to a particular service, app, etc., and start it with:

`yarn dev`

## wsrun CLI for ease of use

This workspace makes use of the `wsrun` CLI tool.

e.g. Use `yarn wsrun -p pkg1 pkg2 -c dev` to run the script `dev` in parallel in both pkg1 and pkg2.
e.g. Use `yarn wsrun --exclude-missing test` to run the script `test` only in packages that have that script.

Check the [wsrun github](https://github.com/whoeverest/wsrun) for a full list of commands.

## Populating your Algolia index

There is a `build-products` task set up in the `tasks` folder. You can run `yarn build-products` from the root of that folder to populate your index with Algolia's demo content. Ideally, this would become a background job that runs on timed intervals.
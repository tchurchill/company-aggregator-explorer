# woodland-seed

This is a template repository containing a Woodland Design System seed app to get you started.

## Getting Started

This repository uses [pnpm](https://pnpm.io/) for package management and running scripts, and [Vite](https://vitejs.dev/) for building and running the dev server. If you don't have pnpm installed, install it globally:

```console
$ npm i -g pnpm
```

You may install Vite globally if you want to, but you needn't.

Create your repo from this template, clone it, then run `pnpm i` to install dependencies followed by `pnpm dev` to start up the app. Then you just need to add an exemption for the self-signed SSL cert that it generates and go to the Localhost app in Commerce Platform and you're off to the races.

If you have any questions or difficulties with this seed app, reach out to us in [#help-woodland](https://spscommerce.slack.com/archives/CELEGDK4Y) on Slack. You can also put in a PR against this repo if you fix a bug or come up with an improvement!

## Scripts

`pnpm dev` / `pnpm start`

Starts the dev server running on `https://localhost:8100` for use with the CP Localhost app.

`pnpm build`

Produces a production build.

`pnpm preview`

Serves the production build at the localhost URL.

`pnpm test`

Run unit tests.

`pnpm test:ui`

Run the vitest UI.

`pnpm lint`

Run linting (includes `--fix` option, so may result in modifications to files).

## Deploying with Azure Pipelines

The first step to getting a deployment set up is creating a service in [Tech Registry](https://commerce.spscommerce.com/sps-tech-registry/). (NB: Tech Registry only exists in production and applies to all environments. Also, you must be on VPN or in the office to use it.)

Next, create an app in App Manager in [test](https://test.commerce.spscommerce.com/app-manager/) and [production](https://commerce.spscommerce.com/app-manager/), making sure to enter your Tech Registry service ID.

Now you will need to update the `.bdp` and `azure-pipelines.yml` files in your new repository.

In order to add an Azure Pipeline for your team, head over to https://dev.azure.com/spscommerce/ and find your team. You can create a new pipeline by selecting your Git repository. For more information on getting started with Azure, visit https://github.com/SPSCommerce/azure-pipelines-config.

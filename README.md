# morrisoncole.co.uk [![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/MorrisonCole/morrisoncole.co.uk)

My personal website(s).

Production [morrisoncole.co.uk](https://morrisoncole.co.uk) is from
`packages/gatsby-site`. Alpha
[alpha.morrisoncole.co.uk](https://alpha.morrisoncole.co.uk) is from
`packages/nextjs-site`.

I'm currently writing a new version in the latter package, so it's likely the
former won't really be updated anymore.

# Development

## Gatsby Site

Requires `GOODREADS_KEY` in order to import Goodreads data.

Requires `gatsby` to be available (`yarn global add gatsby-cli`).

1. Run `yarn install`
2. Run `yarn start:gatsby`

## NextJS Site

1. Run `yarn install`
2. Run `yarn start:next`

## Yarn

### Upgrade Yarn

`yarn set version from sources`

### Upgrade Editor SDKs

`yarn dlx @yarnpkg/pnpify --sdk vscode`

### Upgrade Dependencies

`yarn upgrade-interactive`

## Terraform

`terraform init -backend-config="access_key=access_key" -backend-config="secret_key=secret_key"`

## Fonts

Fonts are originally pulled from https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap.

In order to control pre-loading for performance, self-hosting is [much easier](https://leerob.io/blog/fonts).

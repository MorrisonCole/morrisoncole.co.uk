# morrisoncole.co.uk [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

My personal website(s).

Production [morrisoncole.co.uk](https://morrisoncole.co.uk)
is from `packages/gatsby-site`. Alpha
[alpha.morrisoncole.co.uk](https://alpha.morrisoncole.co.uk) is from
`packages/nextjs-site`. 

I'm currently writing a new version in the latter package,
so it's likely the former won't really be updated anymore.

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

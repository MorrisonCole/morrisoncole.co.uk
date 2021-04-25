# morrisoncole.co.uk [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Just my personal website.

## Getting Started

Requires `GOODREADS_KEY` in order to import Goodreads data.

Requires `gatsby` to be available (`yarn global add gatsby-cli`).

# Development

1. Run `yarn`
2. Run `yarn start`

## Upgrade Dependencies

`yarn upgrade-interactive`

## Update Editor SDKs

`yarn dlx @yarnpkg/pnpify --sdk vscode`

## Terraform

`terraform init -backend-config="access_key=access_key" -backend-config="secret_key=secret_key"`

# CI/CD

## Performance Regression Testing

(CI Only) - make sure `LHCI_GITHUB_APP_TOKEN` is present.

Using [lighthouse-ci](https://github.com/GoogleChrome/lighthouse-ci) for performance regression testing.

_Note:_ running locally appears to be [broken on WSL2 at the moment](https://github.com/GoogleChrome/chrome-launcher/issues/195).

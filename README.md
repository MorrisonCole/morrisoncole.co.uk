# morrisoncole.co.uk [![Open in Visual Studio Code](https://img.shields.io/badge/open%20in-vscode.dev-blue)](https://open.vscode.dev/MorrisonCole/morrisoncole.co.uk)

My personal website.

Production [morrisoncole.co.uk](https://morrisoncole.co.uk). Alpha [alpha.morrisoncole.co.uk](https://alpha.morrisoncole.co.uk) is from https://github.com/MorrisonCole/alpha.morrisoncole.co.uk.

# Development

Requires `GOODREADS_KEY` in order to import Goodreads data.

Requires `gatsby` to be available (`yarn global add gatsby-cli`).

1. Run `yarn install`
2. Run `yarn start`

## Font Generation

You'll need `glyphhanger` [prerequisites](https://github.com/zachleat/glyphhanger?tab=readme-ov-file#installation).

(On WSL, [follow the Puppeteer setup guide](https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-puppeteer-on-wsl-windows-subsystem-for-linux)).

1. `yarn start`
2. `yarn fonts`

## Yarn

### Upgrade Yarn

`yarn upgrade`

### Upgrade Dependencies

`yarn upgrade-interactive`

## Terraform

`terraform init -backend-config="access_key=access_key" -backend-config="secret_key=secret_key"`

## Deploy on Vercel

Seems like Vercel is totally broken with Yarn 2 at the moment. The cache keeps looking for `node_modules`. It's possible to deploy with a fresh (i.e., no cache) build though.

# CI/CD

## Performance Regression Testing

(CI Only) - make sure `LHCI_GITHUB_APP_TOKEN` is present.

Using [lighthouse-ci](https://github.com/GoogleChrome/lighthouse-ci) for performance regression testing.

```
yarn build && yarn test:lighthouse
```

_Note:_ running locally appears to be [broken on WSL2 at the moment](https://github.com/GoogleChrome/chrome-launcher/issues/195).

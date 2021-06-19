module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:3000/"],
      startServerCommand: "yarn workspace nextjs-site start",
      startServerReadyPattern: "ready - started server",
      settings: {
        chromeFlags: "--no-sandbox",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      preset: "lighthouse:no-pwa",
      assertions: {
        "csp-xss": "warn",
        "html-has-lang": "warn",
        "is-crawlable": "warn",
      },
    },
  },
};

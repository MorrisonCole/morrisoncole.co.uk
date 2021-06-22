module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:3000/"],
      startServerCommand: "yarn serve:next",
      startServerReadyPattern: "ready - started server",
      numberOfRuns: 1,
    },
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      preset: "lighthouse:no-pwa",
      assertions: {
        "csp-xss": "warn",
        "is-crawlable": "warn",
      },
    },
  },
};

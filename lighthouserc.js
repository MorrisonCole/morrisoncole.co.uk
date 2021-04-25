module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:9000/"],
      startServerCommand: "yarn serve",
      startServerReadyPattern: "You can now view",
      settings: {
        chromeFlags: "--no-sandbox",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      preset: "lighthouse:recommended",
    },
  },
};

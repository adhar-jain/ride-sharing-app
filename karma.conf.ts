module.exports = function (config) {
    config.set({
      browsers: ['ChromeHeadless'],
      browserDisconnectTimeout: 2000, // Wait 2 seconds before disconnect
      browserNoActivityTimeout: 10000, // Wait 10 seconds for inactivity
    });
  };
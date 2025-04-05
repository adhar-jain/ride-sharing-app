module.exports = function (config: {
        set: (arg0: {
            browsers: string[]; browserDisconnectTimeout: number; // Wait 2 seconds before disconnect
            browserNoActivityTimeout: number;
            singleRun: boolean;
        }) => void;
    }) {
    config.set({
      browsers: ['ChromeHeadless'],
      browserDisconnectTimeout: 2000, // Wait 2 seconds before disconnect
      browserNoActivityTimeout: 10000, // Wait 10 seconds for inactivity
      singleRun: true,
    });
  };
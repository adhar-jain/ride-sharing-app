module.exports = function (config: {
        set: (arg0: {
            browsers: string[]; browserDisconnectTimeout: number; // Wait 2 seconds before disconnect
            browserNoActivityTimeout: number;
            singleRun: boolean;
            plugins?: any[]; // Add plugins property to the type definition
        }) => void;
    }) {
    config.set({
      browsers: ['ChromeHeadless'],
      browserDisconnectTimeout: 2000, // Wait 2 seconds before disconnect
      browserNoActivityTimeout: 10000, // Wait 10 seconds for inactivity
      singleRun: true,
      plugins: [
        require('karma-chrome-launcher'),
        require('karma-jasmine'),
        require('karma-jasmine-html-reporter'),
        require('@angular-devkit/build-angular/plugins/karma')
      ]
    });      
    
  };
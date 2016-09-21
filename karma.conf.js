// Karma configuration

module.exports = function(config){
  config.set({
    frameworks: ['yatra'],

    browsers: ['PhantomJS'],

    port: '9876',

    files: [
      { pattern: 'test/**', included: false }
    ],

    singleRun: true
  });
};

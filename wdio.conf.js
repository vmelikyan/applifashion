const { EyesService } = require('@applitools/eyes-webdriverio');
require('dotenv').config();

exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'warn',
    bail: 0,
    baseUrl: 'https://demo.applitools.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        'chromedriver',
        [
            EyesService, {
                useVisualGrid: true,
                browsersInfo: [
                    { width: 1200, height: 800, name: 'chrome' },
                    { width: 1200, height: 800, name: 'firefox' },
                    { width: 1200, height: 800, name: 'safari' },
                    { width: 1200, height: 800, name: 'edgechromium' },
                    { deviceName: 'iPhone X' }
                ],
                viewportSize: { width: 1200, height: 800 },
                matchLevel: 'Layout',
                matchTimeout: 0,
                batch: { name: 'Holiday Shopping' },
            }],
    ],

    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
};

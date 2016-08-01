// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment.
    // Configure your URL and mail settings here
    production: {
        url: 'https://petersouter.co.uk/',
        mail: {},
        forceAdminSSL: true,
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join('/usr/src/app/content/data/ghost.db')
            },
            debug: true
        },

        server: {
            host: '0.0.0.0',
            port: '2368'
        }
    }
};

module.exports = config;

const browser = require('./browser_protocol.json');
const js = require('./js_protocol.json');

module.exports = {
    'default': { // Support ESM
        browser,
        js,
    },
    browser,
    js,
};
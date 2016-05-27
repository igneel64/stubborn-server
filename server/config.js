const path = require('path');
const config = require(path.join(process.cwd(), '.stubbornrc'));
const log = require('./logger');

log.verbose(config.verbose);

// check configuration
[
  'mocks = string',
  'server.port = number',
  'fallback.host = string',
  'fallback.port = number'
].forEach(check => {
  let s = check.split(/ ?= ?/);
  if (eval(`typeof config.${s[0]} === '${s[1]}'`)) {
    log.debug(`${s[0]} OK!`);
  } else {
    log.error(`${s[0]} is supposed to be a ${s[1]}`);
  }
});

module.exports = config;
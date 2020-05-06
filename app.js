const { promises } = require('dns');

function testFunc() {
  const { Resolver } = promises;
  const resolver = new Resolver();
  const servers = resolver.getServers();
  return servers;
}

module.exports = { testFunc };

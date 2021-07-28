const { configPaths } = require("react-app-rewire-alias");
const { aliasDangerous } = require("react-app-rewire-alias/lib/aliasDangerous");
const rewireStyledComponents = require("react-app-rewire-styled-components");

module.exports = function override(config, env) {
  config = aliasDangerous({
    ...configPaths("./base.tsconfig.json"),
  })(config);

  config = rewireStyledComponents(config, env, {
    displayName: true,
  });

  return config;
};

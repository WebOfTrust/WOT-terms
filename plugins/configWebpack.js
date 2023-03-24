module.exports = function (context, options) {
  return {
    name: 'configWebpack',
    configureWebpack(config, isServer, utils) {
      const { getJSLoader } = utils;
      return {
        module: {
          rules: [
            {
              output: {
                library: 'awesome-notifications',
                libraryTarget: 'umd',
                filename: 'awesome-notifications.js',
                globalObject: 'this',
              },
            },
          ],
        },
      };
    },
  };
};

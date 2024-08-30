const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const exclusionList = require('metro-config/src/defaults/exclusionList');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    blacklistRE: exclusionList([/node_modules\/.*/])
  },
  watchFolders: [
    // Add any additional directories you want Metro to watch.
    // By default, it watches the root directory. Example:
    // path.resolve(__dirname, 'some-other-folder'),
  ],
  transformer: {
    // Transformer settings (if you need to customize the transformer)
  },
  maxWorkers: 2, // Reduce the number of worker threads (adjust as needed)
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

// Find the project and workspace directories
const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

// 1. Watch all files within the monorepo
config.watchFolders = [
  path.resolve(projectRoot, 'apps'),
  path.resolve(projectRoot, 'packages')
];

// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules')
];

// 3. Force Metro to resolve (sub)dependencies through the project root
config.resolver.disableHierarchicalLookup = true;

// 4. Extra configurations for proper module resolution
config.resolver.extraNodeModules = {
  'base': path.resolve(projectRoot, 'packages/base')
};

module.exports = config;

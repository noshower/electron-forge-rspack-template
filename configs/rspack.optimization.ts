import type { Configuration } from '@rspack/core';

export const optimization: Configuration['optimization'] = {
  splitChunks: {
    cacheGroups: {
      vendors: {
        name: 'chunk-vendors',
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
        chunks: 'initial',
      },
      common: {
        name: 'chunk-common',
        minChunks: 2,
        priority: -20,
        chunks: 'initial',
        reuseExistingChunk: true,
      },
    },
  },
  // add runtimeChunk config, resulting in production env can't load preload.js
  // runtimeChunk: {
  //   name: 'runtime',
  // },
};

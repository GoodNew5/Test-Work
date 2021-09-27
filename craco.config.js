const { POSTCSS_MODES } = require('@craco/craco')
const cracoPluginSvgSprite = require('craco-plugin-svg-sprite')
// const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  style: {
    postcss: {
      mode: POSTCSS_MODES.file,
    },
  },
  webpack: {
    alias: {},
    plugins: {
      add: [],
      remove: [],
    },
    configure: {
      module: {
        rules: [],
      },
    },
  },
  devServer: {
    port: 3004,
  },
  plugins: [
    {
      plugin: {
        overrideCracoConfig: ({
          cracoConfig,
          pluginOptions,
          context: { env, paths },
        }) => {
          return cracoConfig
        },
      },
      options: {},
    },
    {
      plugin: cracoPluginSvgSprite,
      options: {
        include: 'src/assets/icons', // required
        compress: true, // option
        svgoConfig: {
          // option
        },
        spriteLoaderConfig: {
          // option
        },
        svgPrefixName: '', // option
      },
    },
  ],
}

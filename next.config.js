/** @type {import('next').NextConfig} */
const config = require('./src/config')
const { graphConfig, uiConfig } = require('./src/graphing/config')

// Generate SCSS variables like webpack config does
const configResult = config()
const featureToggles = configResult?.featureToggles || {}
const scssVariables = []

Object.entries(graphConfig).forEach(function ([key, value]) {
  if (typeof value === 'number') {
    scssVariables.push(`$${key}: ${value}px;`)
  } else if (Array.isArray(value)) {
    scssVariables.push(`$${key}: (${value.join(', ')});`)
  } else {
    scssVariables.push(`$${key}: ${value};`)
  }
})

Object.entries(uiConfig).forEach(function ([key, value]) {
  if (typeof value === 'number') {
    scssVariables.push(`$${key}: ${value}px;`)
  } else if (Array.isArray(value)) {
    scssVariables.push(`$${key}: (${value.join(', ')});`)
  } else {
    scssVariables.push(`$${key}: ${value};`)
  }
})

Object.entries(featureToggles).forEach(function ([key, value]) {
  scssVariables.push(`$${key}: ${value};`)
})

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['d3', 'd3-tip'],
  sassOptions: {
    includePaths: ['./src/stylesheets'],
    additionalData: (content, loaderContext) => {
      return scssVariables.join('\n') + '\n' + content
    },
  },
  webpack: (config, { isServer }) => {
    // Handle d3 and other libraries that may have issues with SSR
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }

    // Configure webpack to handle ESM packages like d3 that are used with require()
    // Transform d3 from ESM to CommonJS so require() works
    if (!isServer) {
      config.module.rules.push({
        test: /node_modules\/d3[\/\\].*\.js$/,
        type: 'javascript/auto',
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { modules: 'commonjs' }],
            ],
            plugins: [],
          },
        },
      })
    }

    // Resolve modules from src directory
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src'),
    }

    // Handle jQuery
    config.plugins.push(
      new (require('webpack')).ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      })
    )

    return config
  },
  env: {
    CLIENT_ID: process.env.CLIENT_ID,
    API_KEY: process.env.API_KEY,
    RINGS: process.env.RINGS,
    QUADRANTS: process.env.QUADRANTS,
    GTM_ID: process.env.GTM_ID,
    ADOBE_LAUNCH_SCRIPT_URL: process.env.ADOBE_LAUNCH_SCRIPT_URL,
  },
}

module.exports = nextConfig

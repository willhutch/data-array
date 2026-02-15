const config = () => {
  const env = {
    production: {
      featureToggles: {
        UIRefresh2022: true,
      },
    },
    development: {
      featureToggles: {
        UIRefresh2022: true,
      },
    },
  }
  // Default to development if ENVIRONMENT is not set
  const environment = process.env.ENVIRONMENT || process.env.NODE_ENV || 'development'
  const result = env[environment] || env.development
  return result
}
module.exports = config

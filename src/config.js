const config = () => {
  const defaultSheetUrl = 'https://docs.google.com/spreadsheets/d/1p0r593ih9l2G1kqpBARtA9eJVom8yckY0ohoWx4FlZE'
  
  const env = {
    production: {
      featureToggles: {
        UIRefresh2022: true,
      },
      // Default data source URL (can be overridden via DATA_SOURCE env var)
      dataSource: process.env.DATA_SOURCE || defaultSheetUrl,
      // Radar menu configuration
      radars: [
        {
          id: 'radar-1',
          name: 'Radar 1',
          dataSource: defaultSheetUrl,
        },
        {
          id: 'radar-2',
          name: 'Radar 2',
          dataSource: defaultSheetUrl,
        },
        {
          id: 'radar-3',
          name: 'Radar 3',
          dataSource: defaultSheetUrl,
        },
      ],
    },
    development: {
      featureToggles: {
        UIRefresh2022: true,
      },
      // Default data source URL (can be overridden via DATA_SOURCE env var)
      dataSource: process.env.DATA_SOURCE || defaultSheetUrl,
      // Radar menu configuration
      radars: [
        {
          id: 'radar-1',
          name: 'Radar 1',
          dataSource: defaultSheetUrl,
        },
        {
          id: 'radar-2',
          name: 'Radar 2',
          dataSource: defaultSheetUrl,
        },
        {
          id: 'radar-3',
          name: 'Radar 3',
          dataSource: defaultSheetUrl,
        },
      ],
    },
  }
  // Default to development if ENVIRONMENT is not set
  const environment = process.env.ENVIRONMENT || process.env.NODE_ENV || 'development'
  const result = env[environment] || env.development
  return result
}
module.exports = config

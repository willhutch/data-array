const config = () => {
  const defaultSheetUrl = 'https://docs.google.com/spreadsheets/d/1LYKutg73TCQdvpaho9jW6COqoXpcZejkqDZUUCzlZ4Q'

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
          name: 'Data Array',
          dataSource: defaultSheetUrl,
          sheetName: 'Data',
          status: 'published',
          allowedUsers: [],
        },
        {
          id: 'radar-2',
          name: 'Tech Array',
          dataSource: defaultSheetUrl,
          sheetName: 'Technology',
          status: 'published',
          allowedUsers: [],
        },
        {
          id: 'radar-3',
          name: 'AI Array',
          dataSource: defaultSheetUrl,
          sheetName: 'AI',
          status: 'published',
          allowedUsers: [],
        },
        {
          id: 'radar-4',
          name: 'Data Array (Draft)',
          dataSource: defaultSheetUrl,
          sheetName: 'Data (Draft)',
          status: 'draft',
          allowedUsers: ['will.j.hutchinson@gmail.com'],
        },
        {
          id: 'radar-5',
          name: 'Tech Array (Draft)',
          dataSource: defaultSheetUrl,
          sheetName: 'Technology (Draft)',
          status: 'draft',
          allowedUsers: ['will.j.hutchinson@gmail.com'],
        },
        {
          id: 'radar-6',
          name: 'AI Array (Draft)',
          dataSource: defaultSheetUrl,
          sheetName: 'AI (Draft)',
          status: 'draft',
          allowedUsers: ['will.j.hutchinson@gmail.com'],
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
          name: 'Data Array',
          dataSource: defaultSheetUrl,
          sheetName: 'Data',
          status: 'published',
          allowedUsers: [],
        },
        {
          id: 'radar-2',
          name: 'Tech Array',
          dataSource: defaultSheetUrl,
          sheetName: 'Technology',
          status: 'published',
          allowedUsers: [],
        },
        {
          id: 'radar-3',
          name: 'AI Array',
          dataSource: defaultSheetUrl,
          sheetName: 'AI',
          status: 'published',
          allowedUsers: [],
        },
        {
          id: 'radar-4',
          name: 'Data Array (Draft)',
          dataSource: defaultSheetUrl,
          sheetName: 'Data (Draft)',
          status: 'draft',
          allowedUsers: ['will.j.hutchinson@gmail.com'],
        },
        {
          id: 'radar-5',
          name: 'Tech Array (Draft)',
          dataSource: defaultSheetUrl,
          sheetName: 'Technology (Draft)',
          status: 'draft',
          allowedUsers: ['will.j.hutchinson@gmail.com'],
        },
        {
          id: 'radar-6',
          name: 'AI Array (Draft)',
          dataSource: defaultSheetUrl,
          sheetName: 'AI (Draft)',
          status: 'draft',
          allowedUsers: ['will.j.hutchinson@gmail.com'],
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

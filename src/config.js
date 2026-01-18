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
  // #region agent log
  if (typeof fetch !== 'undefined') {
    fetch('http://127.0.0.1:7242/ingest/c55d8f9b-e738-4e94-a1fc-550ceba6989a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'src/config.js:16',message:'Config function called',data:{environment,hasResult:!!result,hasFeatureToggles:'featureToggles' in (result||{}),resultKeys:Object.keys(result||{})},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'F'})}).catch(()=>{});
  }
  // #endregion
  return result
}
module.exports = config

export default function ({ $config }) {
  if (process.client && process.env.NODE_ENV === 'production') {
    $config.apiBaseUrl = window.location.origin + '/api'
  } else {
    let apiBaseUrl = process.env.API_BASE_URL ?? 'http://domain'
    if (apiBaseUrl.endsWith('/')) {
      apiBaseUrl = apiBaseUrl.replace(/\/+$/, '')
    }
    $config.apiBaseUrl = apiBaseUrl
  }
}

export const ENV = {
  appName: import.meta.env.VITE_APP_NAME || 'AGRIVERA Crop Solutions Pvt. Ltd.',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'https://api.agrivera.com/v1',
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
};

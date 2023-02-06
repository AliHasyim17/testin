import CONFIG from './config';

const API_ENDPOINT = {
  LOCATION: `${CONFIG.BASE_URL}data.json?auth=vDeY4ahkeK18eqadTy7kFeYREkJwPLHWCQy9xwmN`,
  DETAIL: (id) => `${CONFIG.BASE_URL}data/${id}.json?auth=vDeY4ahkeK18eqadTy7kFeYREkJwPLHWCQy9xwmN`,
  APIFY: `${CONFIG.BASE_APIFY_URL}items?token=apify_api_WwnJsc1IngTPfXsJXxcNBliS2fZDwb18TsxX`,
};

export default API_ENDPOINT;

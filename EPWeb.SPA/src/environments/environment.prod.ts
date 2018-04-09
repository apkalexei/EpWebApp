declare var require: any;

export const environment = {
  production: true,
  apiUrl: require('../assets/configuration.json').DevelopmentApiAdress,
  ngVersion: require('../../package.json').version
};

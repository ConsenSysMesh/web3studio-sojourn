const packageInfo = require('./package.json');

module.exports = {
  assetPrefix:
    process.env.NODE_ENV === 'production' ? `/${packageInfo.name}` : ''
};

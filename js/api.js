var Prismic = require('prismic-javascript');

var connection = Prismic.api('http://manufactory.prismic.io/api');

module.exports = query => connection.then( api => api.query( query ) );
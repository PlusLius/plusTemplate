var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
// http://appcon.leocheery.net/smarthome-devchat/api/v1.1.0/
// http://appcon.leocheery.net/open-platform/api/v1.1.0/
// 100.10.0.121/open-platform/api/v1.1.0/auth/TestAuth
// http://100.10.0.121/open-platform/api/v1.1.0/
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API:'"https://appcon.leocheery.net/open-platform/api/v1.1.0/"',
  WS:'"wss://appcon.leocheery.net:7799"'
})

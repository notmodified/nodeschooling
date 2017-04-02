
const qio = require('./node_modules/q-io/http')

qio.read('http://localhost:7000')
  .then(id => qio.read('http://localhost:7001/' + id))
  .then(JSON.parse)
  .then(console.log)

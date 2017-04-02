const qio = require('./node_modules/q-io/http')


qio.read('http://localhost:1337').then(JSON.parse).then(console.log)

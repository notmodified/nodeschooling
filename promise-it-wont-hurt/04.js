
new Promise((resolve, reject) => {
  resolve('I FIRED')
  reject(new Error('I DID NOT FIRE'))
}).then(console.log, e => console.log(e.message))

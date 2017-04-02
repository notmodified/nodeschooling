
new Promise((resolve, reject) => {
  resolve('PROMISE VALUE')
}).then(console.log, e => console.log(e.message))


console.log('MAIN PROGRAM')

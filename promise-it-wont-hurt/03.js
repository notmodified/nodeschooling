

new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('REJECTED!')), 300)
}).then(null, e => console.log(e.message))

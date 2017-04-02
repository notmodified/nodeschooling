

function attachTitle(e) {
  return 'DR. ' + e
}

Promise.resolve('MANHATTAN').then(attachTitle).then(console.log)

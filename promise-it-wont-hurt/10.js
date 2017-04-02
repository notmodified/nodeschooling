
function alwaysThrows() {
  throw new Error('OH NOES')
}

function iterate(arg) {
  console.log(arg)
  return arg + 1
}

new Promise((res, rej) => {
  res(iterate(1))
})
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch(console.log)

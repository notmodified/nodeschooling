module.exports = valid => test => test.every(e => valid.some(f => f.id === e.id))

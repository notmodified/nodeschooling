module.exports = messages => messages.map(e => e.message).filter(e => e.length < 50)

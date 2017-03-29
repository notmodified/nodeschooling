module.exports = strings => strings.reduce((acc, e) => (acc[e] = (acc[e] || 0) + 1, acc), {})

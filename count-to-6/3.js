
const args = process.argv.slice(2)

const r = args.map(e => e[0]).reduce((acc, e) => acc + e, '')

console.log(`[${args}] becomes "${r}"`);

const [,,...input] = process.argv;

console.log(`The minimum of [${input}] is ${Math.min(...input)}`);

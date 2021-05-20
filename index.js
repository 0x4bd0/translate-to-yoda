const data = process.argv.slice(2);
const res = `${data.slice(Math.floor(data.length/2)).join(` `)}, ${data.slice(0, Math.floor(data.length/2)).join(` `)}`;

console.log("\x1b[36m", 'Yoda says :')
console.log("\x1b[32m", res)

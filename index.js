const data = process.argv.slice(2);

const length = data.length
const half = length/2

let res  = []

if( length%2 == 0 ){
    res.push(...data.slice(half,data.length))
    res.push(',')
    res.push(...data.slice(0,half))
}else {
    res.push(...data.slice(half+1,data.length))
    res.push(',')
    res.push(...data.slice(0,half+1))
}

console.log("\x1b[36m", 'Yoda says :')
console.log("\x1b[32m", res.join(' '))
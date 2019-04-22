const a = [1, 2, 3];
const b = [...a];
a.push(1)
console.log(a);
console.log(b);


const c = a.map((value) => {
    return value * 2;
})

console.log(c);
function foo({a,b,c = 11}){
    console.log(a,b,c)
}
foo({
    a: 10,
    b: 222
})
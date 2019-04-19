const fs = require('fs')

fs.readFile('./data/1.txt',(err,data)=>{
    console.log("1")
})
fs.readFile('./data/2.txt',(err,data)=>{
    console.log(data.toString())
})
fs.readFile('./data/3.txt',(err,data)=>{
    console.log(data.toString())
})

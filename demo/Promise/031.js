const fs = require('fs')

function readFile(...args){
    return new Promise((resolve,reject)=>{
        fs.readFile(...args,(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

readFile('./data/1.txt','utf8')
    .then(data=>{
        console.log(data)
        return readFile('./data/2.txt','utf8')
    })
    .then(data=>{
        console.log(data)
        return readFile('./data/3.txt','utf8')
    })
    .then(data=>{
        console.log(data)
    })
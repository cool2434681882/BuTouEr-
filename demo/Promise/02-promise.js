const fs = require('fs')

// fs.readFile('./data/2.txt',(err,data)=>{
//     console.log(data.toString())
// })
// fs.readFile('./data/3.txt',(err,data)=>{
//     console.log(data.toString())
// })
//Promise一经创建立即执行
new Promise((resolve,reject)=>{
    fs.readFile('./data/111.txt',(err,data)=>{
        if(err){
            return reject(err)
        }
        resolve(data.toString())
    })
})
.then((data)=>{
    //resolve
    console.log(data.toString())
    return new Promise((resolve,reject)=>{
        fs.readFile('./data/2.txt',(err,data)=>{
            if(err){
                return reject(err)
            }
            resolve(data.toString())
        })
    })
},()=>{
    console.log("FFFF")
})
.then((data)=>{
    console.log(data)
    fs.readFile('./data/3.txt',(err,data)=>{
        console.log(data.toString())
    })
})
.catch(err=>{
    console.log("err")
})
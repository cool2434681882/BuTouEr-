const fs = require('fs')

// fs.readFile('./data/2.txt',(err,data)=>{
//     console.log(data.toString())
// })
// fs.readFile('./data/3.txt',(err,data)=>{
//     console.log(data.toString())
// })
//Promise一经创建立即执行
new Promise((resolve,reject)=>{
    fs.readFile('./data/1.txt',(err,data)=>{
        if(err){
            reject(err)
        }
        // console.log("1")
        resolve(data.toString())
    })
})
.then((data)=>{
    //resolve
    console.log(data.toString())
    return new Promise((resolve,reject)=>{
        fs.readFile('./data/2.txt',(err,data)=>{
            if(err){
                reject(err)
            }
            resolve(data.toString())
        })
    })
},()=>{
    //reject
    console.log('err1')
})
.then((data)=>{
    console.log(data)
    fs.readFile('./data/3.txt',(err,data)=>{
        console.log(data.toString())
    })
},(err)=>{

})
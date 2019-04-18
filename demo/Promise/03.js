const fs = require('fs')
const path = require('path')
function getFileByPath(fPath){
    return new Promise(function(resolve,reject){
        fs.readFile(fPath,'utf-8',function(err,dataStr){
            if(err) return reject(err)
            resolve(dataStr)
        })
    })
}
var p2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        var ff = 'xxx'
        resolve(ff)
    },3000)
})

getFileByPath('./data/1.txt')
    .then(function(data){
        console.log(data)
        return getFileByPath('./data/2.txt')
    })
    .then(function(data){
        console.log(data)
        return p2
    })
    .then(function(data){
        console.log(data)
        return getFileByPath('./data/3.txt')
    })
    .then(function(data){
        console.log(data)
    })
    //加上catch 如果出错了直接最终执行进入catch 
    .catch(function(err){
        console.log(err.message)
    })
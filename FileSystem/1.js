

var fs = require('fs');

//fs.open('2.txt','r',function(err,fd){
//
//    if(err){
//        console.log('文件打开失败');
//    }else{
//
//        console.log('文件打开成功');
//    }
//
//    console.log(err);
//    console.log(fd);
//
//});

var fd = fs.openSync('1.txt','r');
console.log(fd);
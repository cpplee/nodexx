/**
 * Created by Administrator on 2016/6/15.
 */



var http = require('http');
var url = require('url');

var server = http.createServer();

server.listen(8080,'localhost');

server.on('listening',function(){

    console.log('listening...');
})

server.on('error',function(err){

    console.log(err);
})
server.on('request',function(req,res){

    console.log('有客户端请求了...');

    //res.setHeader('mv','aaaaaaaa');
    //
    //res.writeHead(200,'ok..');
    var urlStr = url.parse(req.url);

    console.log(urlStr);
    switch (urlStr.pathname){
       case '/':
           res.write('<h1>欢迎来到首页</h1>');
           res.end();
            break;

        default :
            break;


    }

})




//console.log(server.address());
/**
 * Created by Administrator on 2016/6/14.
 */
//console.log(__dirname);
//console.log(process);
//console.log(global.process);

//console.log(process.argv);
//
//console.log(process.title);
//setInterval(function(){
//
//    console.log(process.pid);
//
//},3000);

//function log(data){
//    process.stdout.write(data);
//
//}

//var a;
//var b;
//process.stdin.resume();
//process.stdin.on('data',function(chunk){
//
//         if(!a){
//             a=chunk;
//         }else{
//             b=chunk;
//         }
//    console.log(a+'和'+b);
//});

//var bf = new Buffer(5);
//bf[1]='111';
//console.log(bf);

//var bf1 = new Buffer([1,2,3,4,5]);
//console.log(bf1);
//
//var bf2 = new Buffer('mm','utf-8');
//
//for(var i=0;i<bf2.length;i++){
//
//    console.log(bf2[i]);
//    console.log(String.fromCharCode(bf2[i]));
//}

//var str1 = 'miaov';
//var bf1 = new Buffer(str1);
//console.log(str1.length);
//console.log(bf1.length);
//
//
//var str2 = '妙味';
//var bf2 = new Buffer(str2);
//console.log(str2.length);
//console.log(bf2.length);

//var bf = new Buffer('asdasdasd');
//
//console.log(bf.toString());
//console.log(bf.toString('utf-8',1,3));
//console.log(bf.toJSON());

var bf=new Buffer(5);
var bf4 = new Buffer(10);
console.log(bf);
console.log(bf4);
bf.copy(bf4,1,2,4);

console.log(bf);

console.log(bf4);

//bf4[0]=2;
//console.log(bf4);
//console.log(bf);
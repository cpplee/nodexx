/**
 * Created by Administrator on 2016/6/15.
 */
var fs = require('fs');

var filedir = './mvmv/source';

fs.watch(filedir,function(err,file){

       fs.readdir(filedir,function(err,dataList){

           var arr= [];
           dataList.forEach(function(f){

               var info = fs.statSync(filedir+'/'+f);

               if(info.mode == 33206){
                   arr.push(filedir+'/'+f);
               }
           })

        var content ='';
           arr.forEach(function(f){
               var c = fs.readFileSync(f);

               content += c.toString() + '\n';
           })

           console.log(content.toString());
             fs.writeFileSync('./mvmv/concat/concat.txt',content.toString());
       })

})
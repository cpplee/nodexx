//console.log("hello nodejs");
//
//var a =100;
//console.log(a);
//
//
//var arr = [1,2,3];
//arr.push(4);
//console.log(arr);

var projectData = {

    'name' :'mvmv',
    'fileData':[
        {
            'name':'css',
            'type':'dir'
        },
        {
            'name':'js',
            'type':'dir'
        },
        {
            'name':'images',
            'type':'dir'
        },
        {
            'name':'index.html',
            'type':'file',
            'content':'<html>\n\t<head>\n\t\t<title>title</title>\n\t</head>\n\t</html>'
        }
    ],
}

var  fs = require('fs');

if(projectData.name){
    //linux下使用
    //var exec = require('child_process').exec;
    //var dir = exec('rm -rf '+projectData.name, function(err){
    //        if(err){
    //            console.log(err);
    //        }
    //});
    //console.log(dir);

    deleteFolderRecursive = function(path) {

        var files = [];

        if( fs.existsSync(path) ) {

            files = fs.readdirSync(path);

            files.forEach(function(file,index){

                var curPath = path + "/" + file;

                if(fs.statSync(curPath).isDirectory()) { // recurse

                    deleteFolderRecursive(curPath);

                } else { // delete file

                    fs.unlinkSync(curPath);

                }

            });

            fs.rmdirSync(path);

        }

    };
    deleteFolderRecursive(projectData.name);

    fs.mkdirSync(projectData.name,0777);

    var fileData = projectData.fileData;

    if(fileData && fileData.forEach){

        fileData.forEach(function(f){

            f.path = projectData.name +'/'+ f.name;
            f.content = f.content || '';

            switch(f.type){
                case 'dir':
                    fs.mkdirSync(f.path);
                    break;
                case 'file':
                    fs.writeFileSync(f.path, f.content);
                    break;
                default :
                    break;
            }
        });
    }
}
/**
 * Created by Administrator on 2016/6/14.
 */

function Person(name){
    this.name = name;
}

Person.prototype.run = function(){

    console.log(this.name+'running');
}

var p1 = new Person('小明');

p1.run();
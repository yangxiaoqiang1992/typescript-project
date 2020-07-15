var currying = function(fn){
    var args = [];
    return function(){
        if(arguments.length == 0){
          return fn.apply(this,args)
        }else{
           // args = [...args,...arguments]
            [].push.apply(args, arguments);
            return arguments.callee
        }
    }
};
var add = (function(a){
    console.log(typeof a)
    return function(b){
        console.log(typeof b)
        return a+b;
    }
});
var f = currying(add);
const result = f(1)(2)();
console.log(typeof f(1))
console.log('result',result);


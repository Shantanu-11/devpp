const fs=require("fs");

let f1KaPromise= fs.promises.readFile("./f1.txt");

f1KaPromise.then(function(data){
    console.log(data+"");
    let f2kapromise=fs.promises.readFile("./f2.txt");
    return f2kapromise;
})
.then(function(data){
    console.log(data+"");
    let f3kadata=fs.promises.readFile("./f3.txt");
    return f3kadata;
}).then(function(data){
    console.log(data+"");
    
});

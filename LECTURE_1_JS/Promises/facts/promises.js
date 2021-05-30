const fs=require("fs");

let pendingPromise= fs.promises.readFile("./f2.txt");
console.log(pendingPromise);

//success callback

pendingPromise.then(function(data){
    console.log("inside then ka callback scb");
    console.log(data);
    console.log(pendingPromise);
});


//failure callback

pendingPromise.catch(function(error){
    console.log("catch ka callback fcb");
    console.log(error);
    console.log(promise);
});
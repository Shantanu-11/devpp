const fs=require("fs");

function promisified(filePath){
    return new Promise(function(resolve, reject){
        fs.readFile(filePath, function(error, data){
            if(error){
                reject(error);
            }else{
                resolve(data);
            }
        });
        
    });
}


let promisepending= promisified("./f1.txt");
promisepending.then(function(data){
    console.log(data+"");
});

promisepending.catch(function(error){
    console.log(error);
})
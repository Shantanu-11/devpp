let content= process.argv.splice(2);
let fs=require("fs");
let files=[];
let flags=[];

for(let i=0;i<content.length;i++){
    if(content[i].startsWith('-')){
        flags.push(content[i]);
    }else{
        files.push(content[i]);
    }
}
let filecontent="";
for(let i=0;i<files.length;i++){

    filecontent+= fs.readFileSync(files[i])+"";
}
console.log(filecontent);
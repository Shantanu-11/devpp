let fs=require("fs");
let f1KaData = fs.readFileSync("./f1.txt");
f1KaData = f1KaData+"";



// implementing -s
let data=f1KaData.split("\r\n");
// console.log(data);
let removedSpaces = [];
let emptyPushed = false;
function removeLargeSpaces(data){
    for(let i=0 ; i<data.length ; i++){
        if( data[i] == '' && !emptyPushed ){
            removedSpaces.push(data[i]);
            emptyPushed = true;
        }
        else if(data[i] != ''){
            removedSpaces.push(data[i]);
        }
    }
}
removeLargeSpaces(data);
let joinedString = removedSpaces.join("\n");
console.log(joinedString);

//implementing -b


function addLineNumberToNonEmptyLines(data){
    let count=1;
    for(let i=0;i<data.length;i++){
        if(data[i]!=''){
            data[i]=`${count}.${data[i]}`;
            count++;
        }
    }
    let dataAdded= data.join("\n");
    console.log(dataAdded);
}

addLineNumberToNonEmptyLines(data);



//  implementing -n
function addLineNumber(data){

    for(let i=1;i<=data.length;i++){
       data[i-1]=`${i}.${data[i-1]}`;
   } 
   let dataAdded= data.join("\n");
   console.log(dataAdded);
}

addLineNumber(data);
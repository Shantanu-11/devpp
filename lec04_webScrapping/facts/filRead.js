const fs=require("fs");
const cheerio=require("cheerio");

let fileKaData=fs.readFileSync("./index.html");

let ch=cheerio.load(fileKaData);
let pTag=ch("table");
console.log(pTag.text());
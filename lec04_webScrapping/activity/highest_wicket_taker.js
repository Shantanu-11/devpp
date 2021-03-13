let fs=require("fs");
let cheerio=require("cheerio");
const { request } = require("node:http");

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard",cb);

let highestWicketTaker={};
function cb(error, response, data){
    parseData(data);
}
function parseData(html){
    let highestWicketTakenSoFar=0;
    let name;
    let economy;
    let ch=cheerio.load(html);
    let bothBowlingTables = ch('.Collapsible .table.bowler');
    
    for(let i=0; i<bothBowlingTables.length;i++){
        let bowlingTable=bothBowlingTables[`${i}`];
        let allTrs=ch(bowlingTable).find("tbody tr");
            for(let j=0;)
    }
}
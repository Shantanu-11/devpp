let fs=require("fs");
let cheerio=require("cheerio");
let request=require("request");
request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard",cb);

let highestWicketTaker={};
function cb(error, response, data){
    parseData(data);
}
function parseData(html){
    let highestWicketTakenSoFar=0;
    let name;
    let economy;
    let oppose
    let ch=cheerio.load(html);
    let bothBowlingTables = ch('.Collapsible .table.bowler');
    
    for(let i=0; i<bothBowlingTables.length;i++){
        let bowlingTable=bothBowlingTables[`${i}`];
        let team=ch('.section-header.border-bottom.text-danger.cursor-pointer .header-title').text();
        console.log(team);
        let allTrs=ch(bowlingTable).find("tbody tr");
            for(let j=0; j<allTrs.length;j++){
                let allTds = ch(allTrs[j]).find("td");
                let wicketsTaken=ch(allTds['4']).text();
                if(wicketsTaken>highestWicketTakenSoFar){
                    name=ch(allTds['0']).text();
                    economy=ch(allTds['5']).text();
                    highestWicketTakenSoFar=wicketsTaken;
                }
            }
    }
    highestWicketTaker.name=name;
    highestWicketTaker.wickets= highestWicketTakenSoFar;
    highestWicketTaker.economy=economy;

    console.log(highestWicketTaker);

}
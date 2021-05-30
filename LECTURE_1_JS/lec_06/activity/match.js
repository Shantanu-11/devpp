const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");

// let leaderboard = [];

function getMatch(link) {
  request(link, cb);
}

function cb(error, response, data) {
  parseData(data);
}

function parseData(html) {
  let ch = cheerio.load(html);
  let bothInnings = ch(".match-scorecard-page .Collapsible");
  for (let i = 0; i < bothInnings.length; i++) {
    let inning = ch(bothInnings[i + ""]);
    let teamName = inning.find("h5").text();
    teamName = teamName.split("INNINGS")[0].trim();
    console.log(teamName);

    let batsmanTable = inning.find(".table.batsman");

    let allTrs = batsmanTable.find("tbody tr");

    for (let j = 0; j < allTrs.length - 1; j++) {
      let allTds = ch(allTrs[j]).find("td");
      if (allTds.length > 1) {
        // valid tds
        let batsmanName = ch(allTds["0"]).text().trim();
        let runs = ch(allTds["2"]).text().trim();
        let balls = ch(allTds["3"]).text().trim();
        let fours = ch(allTds["5"]).text().trim();
        let sixes = ch(allTds["6"]).text().trim();
          processLeaderboard(teamName, batsmanName, runs, balls, fours, sixes);
      }
    }
    console.log("##########################################");
  }
}


// when working with json file
function processLeaderboard(teamName , batsmanName , runs , balls , fours , sixes ){
     let leaderboard = JSON.parse(fs.readFileSync("./leaderboard.json"));
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    sixes = Number(sixes);

    if(leaderboard.length){
        for(let i=0 ; i<leaderboard.length ; i++){
            let obj = leaderboard[i];
            if(obj.Team == teamName && obj.Batsman == batsmanName){
                obj.Runs += runs;
                obj.Balls += balls;
                obj.Fours += fours;
                obj.Sixes += sixes;
                fs.writeFileSync("./leaderboard.json" , JSON.stringify(leaderboard));
                return;
            }
        }
    }else{
        let obj = {
            Team : teamName ,
            Batsman : batsmanName ,
            Runs : runs ,
            Balls : balls ,
            Fours : fours ,
            Sixes : sixes
        }
        leaderboard.push(obj);
        fs.writeFileSync("./leaderboard.json" , JSON.stringify(leaderboard));
    }
        
}

module.exports = getMatch;
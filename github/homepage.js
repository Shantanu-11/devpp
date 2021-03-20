let fs=require("fs");
const request = require("request");
const cheerio = require("cheerio");
const getTopics= require("./getAllTopics");


request("https://github.com/topics",cb);

function cb(error, response, data){
    parseData(data);
}

function parseData(html){
    let ch=cheerio.load(html);
    
    let topics= ch('.no-underline.d-flex.flex-column.flex-justify-center');
    
    for(let i=0;i<topics.length;i++){
        let topic= topics[i]["attribs"]["href"];
        let link=topic;
        let completeLink="https://github.com/"+link;
        getTopics(completeLink);

    }
}
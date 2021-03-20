let fs=require("fs");
const request = require("request");
const cheerio = require("cheerio");


function getTopics(link){
    request(link, cb);
}
function cb(response, error, data){
    parseData(data);
}

function parseData(html){
    let ch=cheerio.load(html);
    let topicName=ch('.h1-mktg').text().trim();
    if(!fs.existsSync(`${topicName}`)){
        fs.mkdirSync(`./${topicName}`);
    }
     let allProjectArticleTags = ch('.border.rounded.color-shadow-small.color-bg-secondary.my-4');
   
    for(let i=0 ; i<5 ; i++){
        workOnSingleProject(allProjectArticleTags[i] , topicName);
    }
}
function workOnSingleProject(projectArticleTag, topicName){
    let projectName = cheerio(projectArticleTag).find('a.text-bold').text().trim();
    let allNavLinks = cheerio(projectArticleTag).find(".tabnav-tabs a");
    let issueLink = cheerio(allNavLinks["1"]).attr("href");
    let completeIssueLink = "https://www.github.com"+issueLink;
    // console.log(`projectName: ${projectName} issueLink: ${completeIssueLink}`);

     let projectPath = `./${topicName}/${projectName}`;
    if(!fs.existsSync(projectPath)){
        fs.mkdirSync(projectPath);
    }
    request(completeIssueLink , parseIssue);

    function parseIssue(error , response ,data){
        // now you are on issue page of a single project !!!!
        let ch = cheerio.load(data);
        let allIssuesATags = ch('.js-navigation-container.js-active-navigation-container .js-issue-row .flex-auto a.h4');
        for(let i=0 ; i<allIssuesATags.length ; i++){
            let issueName = ch(allIssuesATags[i+""]).text().trim();
            let issueLink = ch(allIssuesATags[i+""]).attr("href");
            issueLink = "https://www.github.com"+issueLink;
            if(!fs.existsSync(`${projectPath}/issues.json`)){
                fs.writeFileSync(`${projectPath}/issues.json` , JSON.stringify([]));
            }
            else{
                let issues = JSON.parse(fs.readFileSync(`${projectPath}/issues.json`));
                let newIssue = {
                    "Issue Name":issueName,
                    "Issue Link":issueLink
                }
                issues.push(newIssue);
                fs.writeFileSync(`${projectPath}/issues.json` , JSON.stringify(issues));
            }
        }
    }
}
module.exports = getTopics;
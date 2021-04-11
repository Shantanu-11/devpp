let puppeteer= require("puppeteer");
let id="shantanu857@gmail.com";
let pw="Kittu@11";

(async function(){
    let browser = await puppeteer.launch({
        headless:false,
        defaultViewport:null,
        args:["--start-maximized"],
    });
    let allPages = await browser.pages();
    let tab = allPages[0];
    await tab.goto("https://www.linkedin.com");
    await tab.waitForSelector('#session_key');
    let inputs = await tab.$$('#session_key');
    await tab.type("#session_key",id);
    await tab.type("#session_password",pw);
    await tab.click(".sign-in-form__submit-button");
    await tab.waitForSelector('.search-global-typeahead.global-nav__search-typeahead',{visible:true});
    await tab.click('.search-global-typeahead.global-nav__search-typeahead');
    await tab.type('.search-global-typeahead.global-nav__search-typeahead',"pepcoding");
    await tab.keyboard.press('Enter');
    await tab.waitForSelector(".artdeco-pill.artdeco-pill--slate.artdeco-pill--2.artdeco-pill--choice.ember-view.search-reusables__filter-pill-button",{visible:true});
    let peopleButton = await tab.$('.artdeco-pill.artdeco-pill--slate.artdeco-pill--2.artdeco-pill--choice.ember-view.search-reusables__filter-pill-button');
    await peopleButton.click();
    await tab.waitForSelector('.entity-result__title-text.t-16',{visible:true});
    let connections = await tab.$$('.entity-result__title-text.t-16');
    // console.log(connections[0]);
    await tab.waitForTimeout(5000);
    for(let i=0;i<connections.length;i++){
        await connections[i].click();
        await tab.waitForSelector('.artdeco-button.artdeco-button--2.artdeco-button--primary.ember-view',{visible:true});
        await tab.waitForTimeout(5000);
        await tab.click('.artdeco-button.artdeco-button--2.artdeco-button--primary.ember-view');
        await tab.waitForTimeout(5000);
        await tab.waitForSelector('.ml1.artdeco-button.artdeco-button--3.artdeco-button--primary.ember-view',{visible:true});
        await tab.waitForTimeout(5000);
        await tab.click('.ml1.artdeco-button.artdeco-button--3.artdeco-button--primary.ember-view');    
    }

})();
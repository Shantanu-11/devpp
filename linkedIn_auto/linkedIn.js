let puppeteer= require("puppeteer");
let id="shantanu857@gmail.com";
let password="Kittu@11";

(async function(){
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
      });
    let allPages = await browser.pages();
    let tab = allPages[0];
    await tab.goto("https://www.linkedin.com");
    await tab.waitForSelector("#session_key");
    await tab.type("#session_key",id);
    await tab.type("#session_password",password);
    await tab.click(".sign-in-form__submit-button");
    await tab.waitForSelector('.search-global-typeahead.global-nav__search-typeahead');
    await tab.click('.search-global-typeahead.global-nav__search-typeahead');
    await tab.type('.search-global-typeahead.global-nav__search-typeahead',"google");
})();
const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

(async () => {
    const username = readlineSync.question('username:');
    const pass = readlineSync.question('password:', {hideEchoBack: true});
    const option = {waitUntil: 'networkidle2'}
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();

    await page.goto('https://web.facebook.com/login', option);

    const emailField = await page.$('input[name=email]')
    await emailField.type(username)
    await emailField.dispose()

    const passwordField = await page.$('input[name=pass]')
    await passwordField.type(pass)
    await passwordField.dispose()

    const btnSubmit = await page.$('button[name=login]')
    await btnSubmit.click()
    await btnSubmit.dispose()
    
    if(page.url() == 'https://web.facebook.com/'){
        console.log('login sucess')
        // await page.goto('https://free.facebook.com/groups/624274225476159/posts/818019069435006/?__cft__%5B0%5D=AZXAiiCze8qtQeeHoJ-vOIA2iZAa42iCbOj_L7h7b5-MORqyin8KF9QFlVKk5wMzi1SEo9SbhYM4xzHePnBkZPDO8F1Db-lxHNMamBfKlriSRKzucL9VbXCH2LLBpRyqD80CLSxr94icO15s7TyroQ16&__tn__=%2CO%2CP-R&_rdc=1&_rdr', option);

        // const likebtn = await page.$('span.dd')
        // await likebtn.click('span.dd')
        // // await likebtn.waitForSelector('span.dd')

    }
    else{
        console.log('Login gagal')
    }

    // await browser.close();
})();
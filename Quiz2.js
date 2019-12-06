const {Builder, By, Key, util} = require ("selenium-webdriver");
const assert = require ('assert')

async function login() {
    let driver  = await new Builder().forBrowser("firefox").build();

    try {
    await driver.get('https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login');
    await driver.findElement(By.name("txtUsername")).sendKeys('opensourcecms');
    await driver.findElement(By.name("txtPassword")).sendKeys('opensourcecms');
    await driver.findElement(By.name("Submit")).click();
    
            const text = await driver.findElement(By.xpath("//li")).getText();
            assert.equal(text, "Welcome Admin", "Test Fail");
            console.log(text);
        } catch (error) {
            console.log(error);
        }
}
login();
describe("Webdriverio main page", () => {

    it("should have a working API link", async () => {
        await browser.url('https://webdriver.io/');
        const apiLink = await $('//*[@id="__docusaurus"]/nav/div[1]/div[1]/a[3]');
        await apiLink.click();
        await browser.pause(2000);
        const getStartedLink = await $('footer');
        await getStartedLink.scrollIntoView();
        await browser.pause(2000);
        let link = await $('//*[@id="__docusaurus"]/footer/div/div[1]/div[3]/ul/li[1]/a');
        let isDisplayed = await link.isDisplayed();
        console.log("Link is displayed: " + isDisplayed);
        await browser.pause(2000);
        let linkUp = await $('//*[@id="__docusaurus_skipToContent_fallback"]/div/div/main/div/div/div[1]/div/nav/a');
        let isEnabled = await linkUp.isEnabled();
        console.log("Link is enabled: " + isEnabled);
        await browser.pause(2000);
        await linkUp.click();
        await browser.pause(2000);
        let title = await $('//*[@id="webdriver-protocol"]').getText();
        console.log("Title is: " + title);
        await browser.waitUntil(async () => {
            return (title) === 'WebDriver Protocol';
        }, {
            timeout: 3000,
            timeoutMsg: 'Expected title to be different after 3s'
        });
    });

});
class githubPage {
    async open() {
        await browser.url('https://github.com/')
    }
    async goToSignUp() {
        const signUpButton = await $('a[href*="/signup"]')
        await signUpButton.click()
        console.log('Navigated to Sign Up page')
    }
    async checkTitle() {
        const title = await $('//*[@id="cta"]/div/section/div/div/h2');
        title.scrollIntoView();
        await browser.pause(2000);
        const titleText = await title.getText();
        expect(titleText).toHaveText('Millions of developers and businesses call GitHub home')
        console.log('Title is:', titleText);
    }
    async checkLink() {
        const link = await $('//*[@id="cta"]/div/section/div/div/div/a')
        await link.scrollIntoView();
        await expect(link).toBeDisplayed();
        console.log('Link is visible:', await link.isDisplayed());
        await link.click();
        const title = await $('/html/body/div[1]/div[4]/main/div/div[1]/react-partial/div/div/div[2]/h1')
        expect(title).toHaveText('Sign in to GitHub');
        console.log('Title is:', await title.getText());
        const button = await $('/html/body/div[1]/div[4]/main/div/div[2]/form/div[3]/input')
        await expect(button).toBeDisplayed();
        console.log('Button is visible:', await button.isDisplayed());
        await button.click();
        await browser.pause(2000);
    }
    async checkButton() {
        const button = await $('/html/body/div[1]/footer/div[1]/div/section/a[2]')
        await button.scrollIntoView();
        await expect(button).toBeClickable();
        console.log('Button is clickable:', await button.isClickable());
        await button.click();
        const url = await browser.getUrl();
        await expect(url).toBe('https://github.com/newsletter');
        const header = await $('/html/body/div[1]/div[5]/main/react-app/div/div/div/div/div[2]/div[1]/div/div/div[1]/h1');
        await expect(header).toHaveText('Get our developer newsletter');
        const emailInput = await $('#form-field-emailAddress');
        await emailInput.setValue("test@example.com");
        const selectInput = await $('#form-field-country');
        await selectInput.selectByVisibleText("Bolivia");
        await browser.pause(2000);
        const checkbox = await $('//*[@id="FormControl--_r_8_"]/span/span');
        await checkbox.click();
        const subscribeButton = await $('/html/body/div[1]/div[5]/main/react-app/div/div/div/div/div[2]/div[2]/div/div/div/form/div/button');
        await subscribeButton.click();
        await browser.pause(2000);
        const confirmationMessage = await $('//*[@id="hero-section-brand-heading"]');
        await expect(confirmationMessage).toHaveText('Thanks for subscribing');
    }
    async checkSearch() {
        const searchButton = await $('qbsearch-input button');
        await searchButton.click();
        const input = await $('input[name="query-builder-test"]');

        await input.waitForDisplayed();
        await input.click();
        await input.setValue('act');

        await browser.keys('Enter');

        const repo = await $('a[href*="act"]')
        const href = await repo.getAttribute('href');
        expect(href).toContain('act');
        console.log('Search results contain the term "act"');
    }
    async checkPricing() {
        const pricingButton = await $('a[href*="github.com/pricing"]');
        await pricingButton.click();
        await browser.pause(2000);
        const header = await $('/html/body/div[1]/div[5]/main/div[1]/h1');
        await expect(header).toHaveText('Try the Copilot-powered platform');
        const link = await $('a[href*="compare"]')
        await link.scrollIntoView();
        await browser.pause(2000);
        await expect(link).toBeDisplayed();
        await link.click();
        const title = await $('/html/body/div[1]/div[5]/main/div[4]/h1');
        await expect(title).toHaveText('Compare features');

    }
}
export default new githubPage()

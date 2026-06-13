class signupPage {
    async open() {
        await browser.url('https://github.com/signup')
    }
    async checkInput() {
        const emailInput = await $('#email');
        const passwordInput = await $('#password');
        expect(await emailInput.isDisplayed()).toBe(true);
        expect(await passwordInput.isDisplayed()).toBe(true);
        console.log('Email and Password inputs are displayed');
        await browser.pause(2000);
    }
    async checkTitle() {
        const textTitle = await $('//*[@id="signup-form-fields"]').getText();
        expect(textTitle).toContain('Sign up for GitHub');
        console.log('Title text is:', textTitle);
        await browser.pause(2000);
    }
    async inputData(email, password, username) {
        const emailInput = await $('#email');
        const passwordInput = await $('#password');
        const usernameInput = await $('#login');
        await emailInput.setValue(email);
        await passwordInput.setValue(password);
        await usernameInput.setValue(username);
        console.log('Inputted email, password, and username');
        const chooseCountryDropdown = await $('#country-dropdown-panel-button');
        await chooseCountryDropdown.click();
        await $('//li[contains(.,"United States of America")]').click();
        const signupButton = await $('//*[@id="signup-form"]/form/div[2]/button');
        await signupButton.click();
        await browser.pause(2000);
    }
}
export default new signupPage()

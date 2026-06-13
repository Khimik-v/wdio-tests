import githubPage from "../pages/github.page";
import signupPage from "../pages/signup.page";
describe('TC-01:GitHub - Navigation & Sign Up', () => {
    it('should load GitHub homepage correctly', async () => {
        await githubPage.open();
    });
    it('should navigate to Sign Up page', async () => {
        await githubPage.goToSignUp();
    });
    it('should load Sign Up page correctly', async () => {
        await signupPage.open();
        await signupPage.checkTitle();
        await signupPage.checkInput();
        await signupPage.inputData('test@example.com', 'password123', 'testuser');
    });
});
describe('TC-02:GitHub main page', () => {
    it('should check the title and links on the main page', async () => {
        await githubPage.open();
        await githubPage.checkTitle();
    });
    it('should check the links on the main page', async () => {
        await githubPage.open();
        await githubPage.checkLink();
    });

});
describe('TC-03:GitHub main page buttons and inputs', () => {
    it('should check the button on the main page', async () => {
        await githubPage.open();
        await githubPage.checkButton();
    });
});
describe('TC-04:GitHub main page searching', () => {
    it('should search for a repository', async () => {
        await githubPage.open();
        await githubPage.checkSearch();
    });
});
describe('TC-05:GitHub page Pricing ', () => {
    it('should check the pricing page', async () => {
        await githubPage.open();
        await githubPage.checkPricing();
    });

}); 
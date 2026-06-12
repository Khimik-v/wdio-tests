class workPage {
    async clickWorkLink() {
        const workLink = await $('/html/body/div[1]/header/ul/li[5]/a')
        await workLink.click()
    }
    async checkButton() {
        const searchButton = await $('//*[@id="container"]/div[1]/div[2]/div[2]/form/input')
        await expect(searchButton).toBeDisplayed()
        console.log('Search button is displayed: ' + await searchButton.isDisplayed())
    }
    async checkText() {
        await searchButton.click();
        const text = $('//*[@id="container"]/div[1]/div[2]/div[2]/form/div');
        expect(text).toHaveText('Швидкий перехід');
        console.log('Text is: ' + await text.getText())
    }

}

export default new workPage()

class salaryPage {
    async clickSalaryLink() {
        const salaryLink = await $('a[href*="salaries"]')
        await salaryLink.click()
    }
    get header() {
        return $('//*[@id="q1"]/h4')
    }
    async checkHeader() {
        const headerText = await this.header.getText()
        expect(headerText).toHaveText('Квартиль')
        console.log('Salary page header:', headerText)
    }
}

export default new salaryPage()

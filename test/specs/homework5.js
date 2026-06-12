import mainPage from "../pages/main.page"
import salaryPage from "../pages/salary.page"
import workPage from "../pages/work.page"
import deftechPage from "../pages/deftech.page"
describe('Navigation and Menu', () => {
    xit("Header part correct of Salary page", async () => {
        await mainPage.open()
        await salaryPage.clickSalaryLink()
        await salaryPage.checkHeader()
        console.log('Salary page header:', await salaryPage.header.getText())
        await workPage.clickWorkLink()
        await workPage.checkButton()
    })
    xit("Work page", async () => {
        await mainPage.open()
        await workPage.clickWorkLink()
        await workPage.checkButton()
        await workPage.checkText()
    })
    // it("Deftech page", async () => {
    //     await mainPage.open()
    //     await deftechPage.clickDeftechLink()

    //     await deftechPage.checkNews()
    //     await deftechPage.checkBlogs()
    //     await deftechPage.checkImage()
    // })

    
})
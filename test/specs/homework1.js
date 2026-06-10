// describe("Webdriverio main page", () => {

//     it("should have correct url", async () => {
//         await browser.url('https://webdriver.io/');
//         const apiLink = await $('//*[@id="__docusaurus"]/nav/div[1]/div[1]/a[3]');
//         await apiLink.click();
//         await browser.pause(2000);
//         let url = await browser.getUrl();
//         expect(url).toBe('https://webdriver.io/docs/api');
//         console.log("URL is: " + url);
//     });
//     it("should have correct title", async () => {
//         await browser.url('https://webdriver.io/');
//         let apiLink = await $('//*[@id="__docusaurus"]/nav/div[1]/div[1]/a[3]');
//         await apiLink.click();
//         await browser.pause(2000);
//         const titleElement = await $('h1');
//         const title = await titleElement.getText();
//         expect(title).toBe('Introduction');
//         console.log("Title is: " + title);
//     });
//     it("should have correct breadcrumb", async () => {
//         await browser.url('https://webdriver.io/');
//         let apiLink = await $('//*[@id="__docusaurus"]/nav/div[1]/div[1]/a[3]');
//         await apiLink.click();
//         await browser.pause(2000);
//         const breadcrumbElement = await $('//*[@id="__docusaurus_skipToContent_fallback"]/div/div/main/div/div/div[1]/div/article/nav/ul/li[2]/span');
//         const breadcrumb = await breadcrumbElement.getText();
//         expect(breadcrumb).toBe('Introduction');
//         console.log("Breadcrumb is: " + breadcrumb);
//     });
//     it("should have correct link", async () => {
//         await browser.url('https://webdriver.io/');
//         let apiLink = await $('//*[@id="__docusaurus"]/nav/div[1]/div[1]/a[3]');
//         await apiLink.click();
//         await browser.pause(2000);
//         const linkElement = await $('//*[@id="__docusaurus_skipToContent_fallback"]/div/div/main/div/div/div[1]/div/article/div[2]/p[1]/a[1]');
//         let link = await linkElement.getAttribute('href');
//         console.log("Link is: " + link);
//     });
//     it("should have correct search", async () => {
//         await browser.url('https://webdriver.io/');
//         let input = await $("//*[@id=\"__docusaurus\"]/nav/div[1]/div[2]/div[4]/button/span[1]/span");
//         await input.click();
//         let searchInput = await $('//*[@id="docsearch-input"]');
//         await searchInput.addValue('all is done');
//         await browser.pause(2000);
//         let clearSearch = await $('/html/body/div[1]/div/div/header/form/button');
//         await clearSearch.click();
//         await browser.pause(2000);
//         console.log("Search input cleared");
//     });
// });
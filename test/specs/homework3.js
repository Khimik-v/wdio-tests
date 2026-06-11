describe('GitHub - Navigation & Menu', () => {

    it('TC-01: should load GitHub homepage correctly', async () => {
        await browser.url('https://github.com')
        const title = await browser.getTitle()
        expect(title).toContain('GitHub')
    })

    it('TC-02: should display main navigation links', async () => {
        await browser.url('https://github.com')
        const nav = await $('header nav, [aria-label="Global"]')
        await expect(nav).toBeDisplayed()
    })

})

describe('GitHub - Search', () => {

    it('TC-03: should have a visible and clickable search bar', async () => {
        await browser.url('https://github.com')
        const searchBtn = await $('[data-target="qbsearch-input.inputButton"], button[data-target*="search"]')
        await expect(searchBtn).toBeDisplayed()
        await searchBtn.click()
        const searchInput = await $('input[name="query-builder-test"], input[placeholder*="Search"]')
        await expect(searchInput).toBeDisplayed()
    })

    it('TC-04: should return results for "webdriverio"', async () => {
        await browser.url('https://github.com/search?q=webdriverio&type=repositories')
        const results = await $$('[data-testid="results-list"] > *, .search-title')
        expect(results.length).toBeGreaterThan(0)
    })

})

describe('GitHub - Profile Page', () => {

    it('TC-05: should load user profile page', async () => {
        await browser.url('https://github.com/webdriverio')
        const readme = await $('a[href*="README"]')
        await expect(readme).toBeDisplayed()
    })


})
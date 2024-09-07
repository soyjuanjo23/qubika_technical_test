import {Page, expect} from '@playwright/test'

export class DashboardPage {

    readonly page: Page

    constructor(page:Page){
        this.page = page
    }

    async isAt(){
        await this.page.waitForURL('**/dashboard');
        const url = this.page.url();
        expect(url).toContain('/dashboard');
    }
}
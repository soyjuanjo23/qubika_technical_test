import { Page } from "@playwright/test";
import { CategoryPage } from "./categories-page";
import { DashboardPage } from "./dashboard-page";
import { LoginPage } from "./login-page";

export class PageManager {

    readonly page: Page
    private loginPage: LoginPage
    private dashboardPage: DashboardPage
    private categoryPage: CategoryPage

    constructor(page:Page){
        this.page = page
        this.loginPage = new LoginPage(this.page)
        this.dashboardPage = new DashboardPage(this.page)
        this.categoryPage = new CategoryPage(this.page)
    }

    onLoginPage(){
        return this.loginPage
    }

    onDashboardPage(){
        return this.dashboardPage
    }

    onCategoryPage(){
        return this.categoryPage
    }
}
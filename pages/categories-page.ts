import {Locator, Page, expect} from '@playwright/test'

export class CategoryPage {
    
    readonly categorySection: Locator
    readonly categoryInput: Locator
    readonly additionButton: Locator
    readonly acceptButton: Locator
    readonly subCategoryCheckBox: Locator
    readonly categoryParent: Locator
    readonly categoryList: Locator
    readonly successAlert: Locator
    readonly page:Page

    constructor(page:Page){
        this.page = page
        this.categorySection = this.page.locator('.nav-link .fa-tags')
        this.additionButton = this.page.getByRole('button', {name: 'Adicionar'})
        this.categoryInput = this.page.getByPlaceholder('Nombre de categoría')
        this.acceptButton = this.page.getByRole('button', {name: 'Aceptar'})
        this.subCategoryCheckBox = this.page.locator('#customCheckMain')
        this.categoryParent = this.page.locator('[role="combobox"] input')
        this.categoryList = this.page.getByRole('listbox').filter({has: this.page.getByRole('option')})
        this.successAlert = this.page.locator('.toast-success')
    }

    async goToCategoriesSection(){
        await this.categorySection.click()
    }

    async isAt(){
        await this.page.waitForURL('**/category-type');
        const url = this.page.url();
        expect(url).toContain('/category-type');
    }

    async addCategory(categoryName: string){
        await this.additionButton.click()
        await this.categoryInput.fill(categoryName)
        await this.acceptButton.click()
        await expect(this.successAlert).toBeVisible()
    }

    async addSubCategory(categoryName:string, subCategoryName:string){
        await this.additionButton.click()
        await this.subCategoryCheckBox.check({force:true})
        expect(this.subCategoryCheckBox.isChecked).toBeTruthy()
        await this.categoryInput.fill(subCategoryName)
        await this.categoryParent.click()
        await this.categoryParent.fill(categoryName)
        await this.categoryList.first().click()
        await this.acceptButton.click()
        await expect(this.successAlert).toBeVisible()
    }


}
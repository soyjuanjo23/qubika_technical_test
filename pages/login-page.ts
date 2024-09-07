import {Locator, Page, expect} from '@playwright/test'

export class LoginPage{

    readonly page: Page
    readonly userInput: Locator
    readonly passwordInput: Locator
    readonly authButton: Locator

    constructor(page: Page){
        this.page = page
        this.userInput = this.page.getByPlaceholder('Usuario o correo electrónico')
        this.passwordInput = this.page.getByPlaceholder('Contraseña')
        this.authButton = this.page.getByRole('button', {name: 'Autenticar'})
    }

    async isAt(){
        await expect(this.authButton).toBeVisible()
    }

    async login(email: string, password:string){
        await this.userInput.fill(email)
        await this.passwordInput.fill(password)
        await this.authButton.click()
    }
}
import {test} from '../test-options'
import {expect} from '@playwright/test'
import {faker} from '@faker-js/faker'

test.beforeAll('Setup user', async({request})=>{
    const randomName = faker.person.firstName()
    const userInfo = {
        "email": `${randomName}@test.com`,
        "password": "abc123"
    }
    const userResponse = await request.post('https://api.club-administration.qa.qubika.com/api/auth/register', {
        data: userInfo
    })
    expect(userResponse.ok()).toBeTruthy();
    process.env['EMAIL'] = userInfo.email
    process.env['PASSWORD'] = userInfo.password
})

test('Go to Qubika Club and create a category and a sub-category', async({pageManager})=>{

    const randomNumber = faker.number.int({min:10, max:200})
    const categoryOption = `qa automation club ${randomNumber}`
    const email = process.env['EMAIL']
    const password = process.env['PASSWORD']

    if(!email || !password){
        throw new Error('Is missing some of the previous variables')
    }

    await pageManager.onLoginPage().isAt()
    await pageManager.onLoginPage().login(email, password)

    await pageManager.onDashboardPage().isAt()

    await pageManager.onCategoryPage().goToCategoriesSection()
    await pageManager.onCategoryPage().isAt()
    await pageManager.onCategoryPage().addCategory(categoryOption)
    await pageManager.onCategoryPage().addSubCategory(categoryOption, 'playwright')
    
})
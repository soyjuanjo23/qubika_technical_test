import {test as base} from '@playwright/test'
import { PageManager } from './pages/page-manager'

export type TestOptions = {
    pageManager:PageManager
    setup:string
}

export const test = base.extend<TestOptions>({
    setup: [async({page}, use)=>{
        page.goto('https://club-administration.qa.qubika.com/#/auth/login')
        await use('')
    }, {auto:true}],

    pageManager: async({page}, use)=>{
        const pm = new PageManager(page)
        await use(pm)
    }
})
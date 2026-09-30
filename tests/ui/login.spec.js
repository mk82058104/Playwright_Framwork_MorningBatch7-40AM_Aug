import {test} from "@playwright/test";
import { LoginPage } from "../../page/LoginPage";
import { HomPage } from "../../page/HomePage";
import{getTestData} from '../../utils/datareader'
import{getEnv} from '../../utils/envReder';
import { assertVisible } from "../../utils/assertionHelper";
import { fillInput,clickOnEle } from "../../utils/uiHelpers";

test('Validate Login APP', async({page})=>{

    //Url
    const baseUrl =getEnv('BASE_URL');
    //data 
    const loginData=getTestData('login');
    //Page object
    const loginPage=new LoginPage(page);
    const homePage=new HomPage(page);
    await page.goto(baseUrl);
    await loginPage.loginAPP(loginData.username,loginData.password);
    await assertVisible(homePage.homeScreen);
})
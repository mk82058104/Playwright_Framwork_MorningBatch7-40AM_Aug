import { fillInput,clickOnEle } from "../utils/uiHelpers";


export class LoginPage{
    constructor(page){
        this.page=page;
        this.loginLink= page.getByRole('link', { name: 'Log in' });
        this.userInputBox=page.getByRole('textbox', { name: 'Email:' });
        this.userPasswordInputBox=page.getByLabel('Password:');
        this.loginBtn=page.locator('input.button-1.login-button');

    }

    //valdiate mutiple 

    //
    // async loginAPP(user,password){
    //     await this.loginLink.click();
    //     await this.userInputBox.fill(user);
    //     await this.userPasswordInputBox.fill(password);
    //     await this.loginBtn.click();

    // }

     async loginAPP(user,password){
        await clickOnEle(this.loginLink);
        await fillInput(this.userInputBox,user);
        await fillInput(this.userPasswordInputBox,password);
        await clickOnEle(this.loginBtn);
    }
}
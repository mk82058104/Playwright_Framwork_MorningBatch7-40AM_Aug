export class HomPage{
    constructor(page){
        this.page=page;
        this.homeScreen=page.locator('#nivo-slider').locator('a').nth(1)

    }
}
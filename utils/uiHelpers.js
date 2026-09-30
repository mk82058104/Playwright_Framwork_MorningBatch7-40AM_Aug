export async function fillInput(locator,value) {
    await locator.fill(value);
    
}

export async function clickOnEle(locator) {
    await locator.click();
    
}
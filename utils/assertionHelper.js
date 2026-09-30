import { expect } from '@playwright/test'

/**
 * Verifies that the given locator contains the expected text.
 *
 * @param {import('@playwright/test').Locator} locator - The locator to check.
 * @param {string | string[]} expected - The text value or list of text values expected.
 * @returns {Promise<void>} Resolves when the assertion passes.
 */
export async function assertText(locator, expected) {
    await expect(locator).toHaveText(expected)
}

export async function assertUrl(page,value) {
    await expect(page).toHaveURL(new RegExp(value))
}

export async function assertVisible(locator) {
    await expect(locator).toBeVisible();
    
}
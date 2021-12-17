
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'));
    const displayed = await title.isDisplayed();
    expect(displayed).toBe(true);
});

test('Clicking "Draw" button displays the correct div', async () => {
    await driver.findElement(By.id('draw')).click();
    const choices = await driver.findElement(By.id('choices'));
    const displayed = await choices.isDisplayed();
    expect(displayed).toBe(true);
});

test('Clicking an "Add to Duo" button displays the correct div', async () => {
    await driver.findElement(By.id('draw')).click();
    await driver.findElement(By.xpath("//button[@class='bot-btn'][1]")).click();
    const player = await driver.findElement(By.id('player-duo'));
    const displayed = await player.isDisplayed();
    expect(displayed).toBe(true);
});

test('Clicking the "Removed from Duo" button moves the bot back to the correct div', async () => {
    await driver.findElement(By.id('draw')).click();
    await driver.findElement(By.xpath("//button[@class='bot-btn'][1]")).click();
    await driver.findElement(By.xpath("//div[@id='player-duo']//button[@class='bot-btn'][1]")).click();
    const botChoices = await driver.findElements(By.xpath("//div[@id='choices']/div"));
    expect(botChoices.length).toBe(5);
});
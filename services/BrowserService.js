import { chromium, firefox, webkit } from "playwright";

class BrowserService {

    async openBrowser(browserName, url) {

        let browser;

        switch (browserName.toLowerCase()) {

            case "chromium":
                browser = await chromium.launch({
                    headless: false
                });
                break;

            case "firefox":
                browser = await firefox.launch({
                    headless: false
                });
                break;

            case "webkit":
                browser = await webkit.launch({
                    headless: false
                });
                break;

            default:
                throw new Error(`Unsupported browser: ${browserName}`);
        }

        const page = await browser.newPage();
        await page.goto(url);

        return { browser, page };
    }
}

export default BrowserService;
const path = require('path')
const puppeteer = require('puppeteer-core')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
const extPath = resolve('dist')
const userDataPath = resolve('userData')

const loadExt = async () => {
  const browser = await puppeteer.launch({
		headless: false,
		args: [
			`--disable-extensions-except=${extPath}`,
			`--load-extension=${extPath}`,
			'--disable-infobars',
			'--start-maximized',
		],
		userDataDir: userDataPath,
		executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
	})
	// const page = await browser.newPage()
	// await page._client.send('Emulation.clearDeviceMetricsOverride')
	return browser
}
process.on('unhandledRejection', error => {
  console.log('unhandledRejection', error.message);
})

module.exports = loadExt
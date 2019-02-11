const webpack = require('webpack')
const loadExt = require('./loadExtension.js')
const devConfig = require('../config/webpack.dev.js')

let compiler
let watching
let packExt = new Promise((resolve, reject) => {
	compiler = webpack(devConfig)
	watching = compiler.watch({
		aggregateTimeout: 300
	}, (err, stats) => {
		if (err) {
			reject()
		} else {
			resolve()
		}
	})
})

let pptr

packExt.then(() => {
	pptr = loadExt()
	pptr.then(browser => {
		browser.on('disconnected', () => {
			watching.close(() => {
				console.log('Watching close! Because chromium close.')
			})
		})
	})
}).catch(e => {
	console.log(e)
})


process.on('unhandledRejection', err => {
	throw err;
})
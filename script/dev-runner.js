const webpack = require('webpack')
const cp = require('child_process')
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
let vueDevTool = cp.exec(`npx vue-devtools`) // start vue devtool
vueDevTool.on('error', error => {
	console.error(error.message)
})
packExt.then(() => {
	pptr = loadExt()
	pptr.then(browser => {
		browser.on('disconnected', () => {
			watching.close(() => { // close webpack when chromium close
				console.log('Watching close! Because chromium close.')
			})
			cp.spawn('taskkill', ["/pid", vueDevTool.pid, '/f', '/t']) // close vue devtoll when chromium close
		})
	})
}).catch(e => {
	console.log(e)
})

process.on('unhandledRejection', err => {
	throw err
})
const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = merge(commonConfig, {
	mode: 'development',
	watch: true,
	devtool: 'inline-source-map',
	plugins: [
		new webpack.DefinePlugin({
			ENV: `dev`
		})
	]
})

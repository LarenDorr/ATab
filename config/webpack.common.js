const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackMessages = require('webpack-messages')
const ChromeReloadPlugin  = require('crx-reload-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
	context: resolve('src'),
	entry: {
		background: './background/background.js',
		popup: './popup/popup.js',
		options: './options/options.js',
		main: './main/main.js'
	},
	output: {
		path: resolve('dist'),
		filename: '[name]/[name].js'
	},
	resolve: {
		extensions: ['.js', '.json', '.vue'],
		alias: {
			src: resolve('src'),
			img: resolve('src/images')
		}
	},
	module: {
		rules: [
			{
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[ext]'
        }
      },
			{
				test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
			},
			{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          cacheBusting: true
        }
      }
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new WebpackMessages({
      name: 'crx',
      logger: str => console.log(`>> ${str}`)
    }),
		new HtmlWebpackPlugin({
			filename: resolve('dist/popup/popup.html'),
			chunks: ['popup'],
			template: 'popup/popup.html',
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: resolve('dist/options/options.html'),
			chunks: ['options'],
			template: 'options/options.html',
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: resolve('dist/main/main.html'),
			chunks: ['main'],
			template: 'main/main.html',
			inject: false
		}),
		new CopyWebpackPlugin([
			{
				from: 'images',
				to: resolve('dist/images')
			}
		]),
		new ChromeReloadPlugin({
			manifest: resolve('src/manifest.js'),
			extraPaths: [{
				name: 'main',
				inject: resolve('src/main/main.js'),
				listens: [resolve('src/main')]
			}]
		})
	]
}
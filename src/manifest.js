module.exports = {
	name: "ATab",
	"version": "0.0.0",
	"description": "Collect tabs",
	"manifest_version": 2,
	"icons": {
		"16": "images/icon/tab_16.png",
		"32": "images/icon/tab_32.png",
		"48": "images/icon/tab_48.png",
		"64": "images/icon/tab_64.png"
	},
	"browser_action": {
		"default_icon": {
			"16": "images/icon/tab_16.png",
			"32": "images/icon/tab_32.png",
			"48": "images/icon/tab_48.png",
			"64": "images/icon/tab_64.png"
		},
		"default_title": "ATab",
		"default_popup": "popup/popup.html"
	},
	"author": "LarenDorr",
	"background": {
		"scripts": ["background/background.js"],
		"persistent": false
	},
	"options_page": "options/options.html",
	"permissions": [
		'tabs',
		'storage',
		'unlimitedStorage',
		'https://www.google.cn/'
	],
	"web_accessible_resources": ["images/*"],
	"content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self'"
}
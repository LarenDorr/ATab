import devtools from '@vue/devtools'

if (process.env.NODE_ENV === 'development') {
  devtools.connect('http://localhost',8098)
}

import Vue from 'vue'
import App from './App.vue'

new Vue({
	el: '#app',
	components: {
		App
	},
	render: h => h(App)
})



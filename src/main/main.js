// import devtools from '@vue/devtools'

// if (process.env.NODE_ENV === 'development') {
//   devtools.connect('http://localhost',8098)
// }

import Vue from 'vue'
import App from './App.vue'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Vue.use(Vuetify)
new Vue({
	el: '#app',
	components: {
		App
	},
	render: h => h(App)
})



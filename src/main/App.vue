<template>
	<div class="app">
		<LazyLoad
			@active="handleActive"
		>
			<Set v-for="(data, index) in dataSets" 
				:data="data" 
				:key="index" 
				:data-key="index"
			>
			</Set>
		</LazyLoad>
	</div>
</template>
<script>
import Set from './components/Set/Set'
import Tab from './components/Tab/Tab'
import LazyLoad from './components/LazyLoad'
import dataSets from  'main/data/mock'

export default {
	name: 'app',
	data () {
		return {
			dataSets: [],
			tabs: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		}
	},
	computed: {
	},
	mounted(){
		dataSets.forEach(set => {
			this.dataSets.push({
				set: set,
				isActive: false
			})
		})
	},
	methods:{
		handleActive(num){
			this.dataSets[num].isActive = true
		}
	},
	components: {
		Set,
		Tab,
		LazyLoad
	}
}
</script>
<style scoped>
.app{
	height: 100%;
}
.scroller {
  height: 100%;
}
</style>


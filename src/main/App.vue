<template>
	<div class="app">
		main page
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
			dataSets: []
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
			console.log(num)
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


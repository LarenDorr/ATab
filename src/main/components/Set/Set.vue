<template>
	<div class="set" :style="setHeight">
		<div v-if="data.isActive">
			<Tab v-for="(tab, index) in data.set" :tab="tab" :key="index"></Tab>
		</div>
	</div>
</template>
<script>
import Tab from '../Tab/Tab'

export default {
	name: 'set',
	props:{
		data: Object
	},
	data(){
		return {
			setHeight:{
				height: '0px'
			}
		}
	},
	mounted(){
		this.setHeight.height = `${this.data.set.length * 34}px`
	},
	components: {
		Tab
	},
}
</script>
<style scoped>
.set{
	padding: 20px 0;
}
</style>

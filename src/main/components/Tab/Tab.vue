<template>
	<div class="tab">
		<TabIcon :url="this.tab.url" class="tab-icon"></TabIcon>
		<span>{{this.tab.title}}</span>
	</div>
</template>
<script>
import TabIcon from './TabIcon'

export default {
	name: 'tab',
	props: {
		tab:{
			url: String,
			title: String
		}
	},
	components: {
		TabIcon
	}
}
</script>
<style scoped>
.tab{
	width: 100%;
	height: 26px;
	padding: 4px 0;
}
.tab-icon{
	width: 16px;
	height: 16px;
	display: inline-block;
	vertical-align: middle;
}
</style>

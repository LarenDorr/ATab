<template>
	<div class="lazy">
		<slot></slot>
	</div>
</template>
<script>
// TODO: add buffer
export default {
	name: 'lazy-load',
	data () {
		return {
			IO: new IntersectionObserver(this.handleIntersection)
		}
	},
	mounted(){
		console.log(this)
		setTimeout(() => {
			let children = [...this.$el.children]
			children.forEach(set => {
				this.IO.observe(set)
			})
		}, 0)
	},
	methods:{
		handleIntersection(entries){
			entries.forEach(entry => {
				if (entry.isIntersecting || entry.intersectionRatio) {
					this.$emit('active', entry.target.dataset.key)
				}
			})
		}
	}
}
</script>

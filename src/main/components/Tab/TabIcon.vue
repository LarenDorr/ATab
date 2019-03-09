<template>
	<div>
		<img :src="this.imgData" :alt="this.tabUrl">
	</div>
</template>
<script>
// TODO: get img dataurl from storagess
export default {
	name: 'TabIcon',
	props:{
		url: String
	},
	data: function () {
		return {
			baseUrl: 'https://www.google.cn/s2/favicons?domain=',
			tabUrl: this.url, // TODO: tab 截断query
			imgData: ''
		}
	},
	methods: {
		getImageData(cb){
			let img = new Image(16,16)
			img.setAttribute('crossOrigin', 'anonymous')
			img.src = this.baseUrl + this.tabUrl
			img.onload = function () {
				let canvas = document.createElement('canvas')
				canvas.width = 16
				canvas.height = 16
				canvas.getContext('2d').drawImage(this, 0, 0)
				cb(canvas.toDataURL('image/png'))
			}
		}
	},
	mounted(){
		this.getImageData((imgData) => {
			this.imgData = imgData
		})
	}
	
}
</script>

<template>
	<div>
		<img :src="this.imgData">
	</div>
</template>
<script>
import IconStorage from 'chrome/IconStorage'
// TODO: get img dataurl from storagess
export default {
	name: 'TabIcon',
	props:{
		url: String
	},
	data: function () {
		return {
			baseUrl: 'https://www.google.cn/s2/favicons?domain=',
			imgData: ''
		}
	},
	computed: {
		tabUrl(){
			let urlArr = (new URL(this.url)).hostname.split('.')
			return `${urlArr[urlArr.length - 2]}.${urlArr[urlArr.length - 1]}`
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
		IconStorage
			.get(this.tabUrl)
			.then(data => {
				if (data) {
					this.imgData = data
				} else {
					this.getImageData((imgData) => {
						this.imgData = imgData
						IconStorage.set(this.tabUrl, imgData)
					})
				}
			})
	}
	
}
</script>

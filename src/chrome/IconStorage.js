import ChromeStorage from './Storage'

class IconStorage {
	constructor(){
		this.db = new ChromeStorage('local')
	}
	async set(url, data){
		let res = {}
		res[url] = data
		await this.db.set(res)
	}
	async get(url){
		if (!url) {
			return
		} else {
			let res = await this.db.get(url)
			if (Object.keys(res).length === 0) {
				return
			}
			return res[url]
		}
	}
}
export default new IconStorage()
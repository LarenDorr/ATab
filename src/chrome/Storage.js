function promiseify(func) { // custom promisify
	return function (args) {
		return new Promise((resolve, reject) => {
			func(args, items => {
				if (chrome.runtime.lastError) {
					reject(chrome.runtime.lastError)
				} else {
					resolve(items)
				}
			})
		})
	}
}
export default class ChromeStorage {
	constructor(StorageArea){
		if (StorageArea === 'local') {
			this.db = chrome.storage.local
		} else if (StorageArea === 'sync') {
			this.db = chrome.storage.sync
		}
	}
	async get(query){
		return promiseify(this.db.get.bind(this.db))(query)
	}
	async set(items){
		return promiseify(this.db.set.bind(this.db))(items)
	}
	async remove(query){
		return promiseify(this.db.remove.bind(this.db))(query)
	}
	getBytesInUse(query){
		return promiseify(this.db.getBytesInUse.bind(this.db))(query)
	}
	async clear(){
		return promiseify(this.db.clear.bind(this.db))()
	}
}
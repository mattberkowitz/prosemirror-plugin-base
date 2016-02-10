export class Plugin {
	constructor(pm, options) {
		this.pm = pm
		this.options = this.defaultOptions

		for(let option in options) this.options[option] = options[option]

		//build up
	}

	destroy() {
		//tear down
	}

	get defaultOptions() {
		return {
			anOption: true
		}
	}
	
}

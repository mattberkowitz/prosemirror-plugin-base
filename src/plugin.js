export class Plugin {
	constructor(pm, options) {
		this.pm = pm
		
		//setup default options and override with passed in options
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

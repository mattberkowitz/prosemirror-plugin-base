This is a starter project for creating a ProseMirror plugin

## Setup instructions

The following references should be updated to better represent your plugin:


### package.json

- Change `name` to your plugin name
- Change `description` to a description of your plugin
- Change `repository.url` to the git url for your plugin
- Change `bugs.url` to be your github issues page
- Change `homepage` to be your github readme or dedicated webstie



### src/plugin.js

- Change `Plugin` class name to be representative of your plugin
- Add your options to `get defaultOptions()`


### src/option.js

- Change `plugin` name in defineOption first parameter
- Change where `plugin` is stored in `pm.mod`
- Change `Plugin` class to match the class name in `src/plugin.js`


### src/commands.js

- Add relevant commands for your plugin



### demo/demo.js

- Change `plugin` option to be the same as the string passed to defineOption in `src/option.js`


### README.md

- Delete everything above the template line
- Update all references in brackets

**===== Below here is a Plugin README.md template, change anything in `[brackets]` =====**





# [prosemirror-plugin-base]
[Default] Plugin for ProseMirror


## Usage

Open your project in command prompt and run:

`npm install prosemirror --save`

`npm install [prosemirror-plugin-base] --save`


In your ProseMirror initialization script:

```
import { ProseMirror } from "prosemirror"
import "[prosemirror-plugin-base]"

let pm = new ProseMirror({
  place: document.querySelector("#target"),
  [plugin]: {}
})
```


### Options

The following options can be passed in the [find] object when ProseMirror is initialized:

[**anOption** *(Boolean, default: true)*: An option description]


### Commands

A simple, default set of commands is included, if you choose to use them:

```
import { CommandSet, ProseMirror } from "prosemirror/dist/edit"
import { commands } from "[prosemirror-plugin-base]"

let pm = new ProseMirror({
  place: document.querySelector("#target"),
  [plugin]: {},
  commands: CommandSet.default.add(commands)
})
```

[**sampleCommand** *(Ctrl + Shift + Meta + Y)* - A sample command]


## Demo

To run a quick demo (based on ProseMirror demo) run the following from the `[prosemirror-plugin-base]` directory in a command prompt:

`npm install`

`npm install prosemirror` (npm > 3 will not install peerDependencies for you)

`npm run demo`

Connect to `http://localhost:8080` in your browser

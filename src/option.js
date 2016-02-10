import { defineOption } from "prosemirror/dist/edit"
import { Plugin } from "./plugin"

defineOption("plugin", false, (pm, value) => {
  if (pm.mod.plugin) {
    pm.mod.plugin.detach()
    pm.mod.plugin = null
  }
  if (value) {
    pm.mod.plugin = new Plugin(pm, value)
  }
})

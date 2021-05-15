package require

import (
	"github.com/dop251/goja"
	"github.com/simskij/goja-demos/modules/event"
)

// New returns a new resolver
func New(vm *goja.Runtime) func(string) goja.Value {
	index := map[string]interface{}{
		"event": event.New(),
	}

	return func(path string) goja.Value {
		if index[path] != nil {
			return vm.ToValue(index[path])
		}
		return vm.ToValue(nil)
	}
}

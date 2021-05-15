package main

import (
	"github.com/dop251/goja"
	"github.com/simskij/goja-demos/common/console"
	"github.com/simskij/goja-demos/common/require"
)

func main() {

	vm := goja.New()
	vm.SetFieldNameMapper(
		goja.UncapFieldNameMapper(),
	)

	c := console.New(vm)
	vm.Set("console", c)
	vm.Set("require", require.New(vm))

	_, err := vm.RunString(`

		function sayHello() {
				var event = require("event")
				console.log("Hello " + event.getName() + "!")
		}

		sayHello();

	`)
	if err != nil {
		panic(err)
	}

}

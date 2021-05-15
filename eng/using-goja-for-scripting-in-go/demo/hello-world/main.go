package main

import (
	"fmt"

	"github.com/dop251/goja"
)

func main() {

	vm := goja.New()
	c := newConsole(vm)
	vm.Set("console", c)

	_, err := vm.RunString(`

		function sayHello() {
				console.log('Hello world!');
		}

		sayHello();

	`)
	if err != nil {
		panic(err)
	}

}

func newConsole(vm *goja.Runtime) *goja.Object {
	c := &console{}
	obj := vm.NewObject()
	obj.Set("log", c.log)
	return obj
}

type console struct{}

func (c *console) log(msg string) {
	fmt.Println(msg)
}

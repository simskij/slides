package console

import (
	"fmt"

	"github.com/dop251/goja"
)

func New(vm *goja.Runtime) *Console {
	c := &Console{}
	return c
}

type Console struct{}

func (c Console) Log(msg string) {
	fmt.Println(msg)
}

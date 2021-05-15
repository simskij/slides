package event

// Module ...
type Module struct {
}

func New() *Module {
	return &Module{}
}

func (m Module) GetName() string {
	return "Online Go Conference 2021"
}

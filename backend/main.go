package main

import (
	"blogga/api"
	"blogga/config"
)

func main() {
	config.Init()

	api.Init()
}

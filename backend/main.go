package main

import (
	"blogga/api"
	"blogga/config"
	"os"
)

func main() {
	configFile := os.Getenv("CONFIG_FILE")
	config.Init(configFile)

	api.Init()
}

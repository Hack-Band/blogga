package config

import (
	"log"
	"strings"

	"github.com/fsnotify/fsnotify"
	"github.com/spf13/viper"
)

// Handle all configuration data
type Config struct{}

var config Config

// Expose config
func Get() *Config {
	return &config
}

// Initialize project configuration
func Init(file string) {
	fileName, fileType := "config", "yaml"
	if file != "" {
		fileDetails := strings.Split(file, ".")
		if len(fileDetails) != 2 {
			log.Fatal("invalid config file:", file)
		}
		fileName = fileDetails[0]
		fileType = fileDetails[1]
	}
	viper.SetConfigName(fileName)
	viper.SetConfigType(fileType)
	viper.AddConfigPath("./")

	// Attempt to load config
	if err := viper.ReadInConfig(); err != nil {
		log.Fatal(err.Error())
	}

	viper.OnConfigChange(func(event fsnotify.Event) {
		log.Println("Config file changed:", event.Name)
	})

	// Reload config if updated
	viper.WatchConfig()
}

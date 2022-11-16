package config

import (
	"log"

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
func Init() {
	viper.SetConfigName("config")
	viper.SetConfigType("yaml")
	viper.AddConfigPath("./")

	// Attempt to load config
	if err := viper.ReadInConfig(); err != nil {
		if _, ok := err.(*viper.ConfigFileNotFoundError); ok {
			log.Fatal(err.Error())
		}
	}

	viper.OnConfigChange(func(event fsnotify.Event) {
		log.Println("Config file changed:", event.Name)
	})

	// Reload config if updated
	viper.WatchConfig()
}

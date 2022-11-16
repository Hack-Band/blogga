package config

import (
	"fmt"
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// Handle all configuration data
type Config struct {
	Postgres *gorm.DB
}

var config Config

// Expose config
func Get() *Config {
	return &config
}

// Initialize project configuration
func Init() {
	config = Config{}

	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=5432 sslmode=disable connect_timeout=5 timezone=UTC", os.Getenv("POSTGRES_HOST"), os.Getenv("POSTGRES_USER"), os.Getenv("POSTGRES_PASSWORD"), os.Getenv("POSTGRES_DB"))
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}

	config.Postgres = db
}

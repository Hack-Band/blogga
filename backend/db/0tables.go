package db

import "time"

// Base fields to be used by all tables in the database
type BaseFields struct {
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

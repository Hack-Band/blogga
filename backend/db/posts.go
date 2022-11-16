package db

import "gorm.io/gorm"

type Image struct {
	Caption string `json:"caption"`
	URL     string `json:"url"`
	Alt     string `json:"alt"`
}

type Post struct {
	gorm.Model
	BaseFields
	Title      string `json:"title"`
	CoverImage Image  `json:"cover_image"`
	Excerpt    string `json:"excerpt"`
}

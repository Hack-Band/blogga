package db

type Image struct {
	Caption string `json:"caption"`
	URL     string `json:"url"`
	Alt     string `json:"alt"`
}

type Post struct {
	BaseFields
	Title      string `json:"title"`
	CoverImage Image  `json:"cover_image"`
	Excerpt    string `json:"excerpt"`
}

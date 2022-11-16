package api

import (
	"log"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

func blogHandler(router *gin.Engine) {
	blog := router.Group("/posts")
	{
		blog.GET("", getPosts)
		blog.GET("/:slug", getPost)
	}
}

func getPosts(c *gin.Context) {
	var pageNum, pageSize int
	var err error
	if pageNum, err = strconv.Atoi(c.Query("page")); err != nil {
		pageNum = 1
	}
	if pageSize, err = strconv.Atoi(c.Query("page")); err != nil {
		pageSize = 15
	}
	log.Println(pageNum, pageSize)
	c.JSON(http.StatusOK, gin.H{
		"status": http.StatusOK,
		"error":  false,
		"data": map[string]string{
			"size": strconv.Itoa(pageSize),
			"page": strconv.Itoa(pageNum),
		},
	})
}

func getPost(c *gin.Context) {
	slug := c.Param("slug")
	log.Printf("Attempting to check for post with slug: %s", slug)
	c.JSON(http.StatusOK, gin.H{
		"status": http.StatusOK,
		"error":  false,
		"data": map[string]string{
			"slug": slug,
		},
	})

}

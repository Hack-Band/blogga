package api

import (
	"github.com/gin-gonic/gin"
)

var router *gin.Engine

func Get() *gin.Engine {
	return router
}

func Init() {
	// Initialize router
	router = gin.Default()

	// Test endpoint
	router.GET("/hello", hello)

	// 404 handler
	router.NoRoute(notFound)

	// Start server
	router.Run()
}

func hello(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "hello world!",
	})
}

func notFound(c *gin.Context) {
	c.JSON(404, gin.H{
		"code":    404,
		"message": "Not Found",
	})
}

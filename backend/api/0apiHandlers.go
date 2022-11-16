package api

import "github.com/gin-gonic/gin"

func registerHandlers(router *gin.Engine) {
	blogHandler(router)
}

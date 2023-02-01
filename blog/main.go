package main

import (
	"errors"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type restaurant struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Address     string `json:"address"`
}

var restaurants = []restaurant{
	{ID: "1", Name: "China Bistro", Description: "Great for dumplings", Address: "755 Hungerford Dr, Rockville, MD 20850"},
	{ID: "2", Name: "M & N's Pizza", Description: "Fun Wacky pizzas", Address: "4914 Del Ray Ave, Bethesda, MD 20814"},
	{ID: "3", Name: "Bethesda Bagels", Description: "Bagels", Address: "4819 Bethesda Ave, Bethesda, MD 20814"},
}

func getAllRestaurants(context *gin.Context) {
	context.IndentedJSON(http.StatusOK, restaurants)

}

func addRestaurant(context *gin.Context) {
	var newRestaurant restaurant

	if err := context.BindJSON(&newRestaurant); err != nil {
		return
	}

	restaurants = append(restaurants, newRestaurant)

	context.IndentedJSON(http.StatusCreated, newRestaurant)
}

// helper function that returns the book object by ID
// return a pointer to a book and an error -- if book doesn't exist need to return error
func getRestaurantById(id string) (*restaurant, error) {
	for i, r := range restaurants {
		if r.ID == id {
			return &restaurants[i], nil
		}
	}

	return nil, errors.New("Restaurant not found")
}

// handles the route associated w/ getting book by ID
func getRestaurant(context *gin.Context) {

	// Param means it will be a path parameter
	id := context.Param("id")

	restaurant, err := getRestaurantById(id)

	if err != nil {
		context.IndentedJSON(http.StatusNotFound, gin.H{"message": "Restaurant not found"})
		return
	}

	context.IndentedJSON(http.StatusOK, restaurant)
}

func deleteRestaurant(c *gin.Context) {
	id := c.Param("id")

	__, err := getRestaurantById(id)

	if err != nil {
		c.IndentedJSON(http.StatusNotFound, gin.H{"message": "Restaurant not found"})
		return
	}

	for i, r := range restaurants {
		if r.ID == id {
			restaurants = append(restaurants[:i], restaurants[i+1:]...)

			c.IndentedJSON(http.StatusOK, __)
		}
	}
}

func main() {
	router := gin.Default()
	// config := cors.DefaultConfig()
	// config.AllowOrigins = []string{"http://localhost:4200/"}
	router.Use(cors.Default())
	router.GET("/restaurants", getAllRestaurants)
	router.GET("/restaurants/:id", getRestaurant)
	router.POST("/restaurants", addRestaurant)
	router.DELETE("/restaurants/:id", deleteRestaurant)
	router.Run("localhost:8083")
}

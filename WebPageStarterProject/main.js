// Food array
let foodArray = [];

// Initializing the food array with default items
document.addEventListener("DOMContentLoaded", function (event) {
    foodArray.push(new FoodItem("banana", 90));
    foodArray.push(new FoodItem("Orange", 60));

    // Display the initial food items in the console
    for (let i = 0; i < foodArray.length; i++) {
        console.log(foodArray[i].show());
    }

    // Event listener for adding calories
    document.getElementById("addCalories").addEventListener("click", function () {
        // Add new food item
        foodArray.push(newFood());

        // Output the new food item in the console
        console.log(foodArray[foodArray.length - 1].show());

        // Update the total calories display
        let totalCalories = addingCalories();
        document.getElementById("total").value = totalCalories;

        // Clear input fields
        document.getElementById("foodName").value = "";
        document.getElementById("calories").value = "";
    });
});

// FoodItem constructor function
let FoodItem = function (pFoodName, pCalories){
    this.foodName = pFoodName;
    this.calories = parseInt(pCalories);
    this.show = function(){
        return "Food item: " + this.foodName + ", Calories: " + this.calories;
    }
}

// Function to create a new food item based on user input
let newFood = function () {
    return new FoodItem(
        document.getElementById("foodName").value,
        document.getElementById("calories").value
    );
}

// Function to calculate total calories
function addingCalories () {
    let total = 0;
    for (let i = 0; i < foodArray.length; i++){
        total = total + foodArray[i].calories;
    }
    return total;
}

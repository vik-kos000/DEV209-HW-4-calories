//new food array
foodArray = [];

document.addEventListener("DOMContentLoaded", function (event) {

    //the 2 foods already there not inputed by user
    foodArray.push(new FoodItem("banana", 90));
    foodArray.push(new FoodItem("orange", 60));

    //puts the foodArray out into the console.log
    for (let i = 0; i < foodArray.length; i++){
        console.log(foodArray[i].show())
    }

    //what happens when the button is clicked
    document.getElementById("addCalories").addEventListener("click", function () {

        //enter the users input into the foodArray and outputs the input into the console.log
        foodArray.push(newfood())
        console.log(foodArray[foodArray.length - 1].show())
        
        //enter the total amount of calories into the total input
        let totalCalories = document.getElementById("total");
        totalCalories.value = addingCalories();

        //erases the input boxes after the user clicked the button
        document.getElementById("foodName").value = "";
        document.getElementById("calories").value = "";

    });
});

//the object constructor with input parameters
let FoodItem = function (pFoodName, pCalories){
    this.foodName = pFoodName;
    this.calories = parseInt(pCalories);
    this.show = function(){
        return ("Food item: " + this.foodName + ", Calories: " + this.calories)
    }
}

//function for getting users input ready for foodArray
let newfood = function () {
    return new FoodItem(
        document.getElementById("foodName").value,
        document.getElementById("calories").value
    );
}

//function for finding the total amount of calories
function addingCalories () {
    let total = 0;
    for (let i = 0; i < foodArray.length; i++){
        total = total + foodArray[i].calories;
    }
    return total;
}


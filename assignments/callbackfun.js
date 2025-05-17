function eat() {
    console.log("Now I'm eating the food!");
  }
  
  function cookFood(afterCooking) {
    console.log("Food is being cooked...");
    afterCooking(); // This is the callback function
  }
  
  cookFood(eat);
  
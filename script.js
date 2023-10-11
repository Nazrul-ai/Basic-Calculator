// Get the display element by its ID
const display = document.getElementById("result-value");

// Get all the buttons
const buttons = document.querySelectorAll("button");

// Get the "AC" button by its ID
const clearButton = document.getElementById("acc");

// Initialize a variable to store the current expression
let currentExpression = "";

// Add a click event listener to the "AC" button
clearButton.addEventListener("click", function() {
  currentExpression = "";
  display.innerText = "0";
});

// Add a click event listener to each button
buttons.forEach(button => {
  button.addEventListener("click", function() {
    const buttonText = button.innerText;

    if (buttonText === "=") {
      // If the "=" button is clicked, calculate the result and update the display
      try {
        currentExpression = eval(currentExpression);
        display.innerText = currentExpression;
      } catch (error) {
        display.innerText = "Error";
      }
    } else if (buttonText === "AC") {
      // "AC" button functionality is already added above
    } else {
      // Otherwise, add the button's text to the current expression and update the display
      currentExpression += buttonText;
      display.innerText = currentExpression;
    }
  });
});


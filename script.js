// Get the display element
const display = document.querySelector("#display");
// Get the equals button
const equalsButton = document.querySelector("#equals");
// Get the operator buttons
const operatorButtons = document.querySelectorAll(".operator");
// Declare a global variable to store the display value
let operations = [];
let currentValue = "";

// add a delete for the delete button
const deleteButton = document.querySelector("#delete");
deleteButton.addEventListener("click", () => {
  let text = display.innerHTML;
  text = text.substring(0, text.length - 1);
  display.innerHTML = text;
});
//add a clear to the clear button
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  display.innerHTML = "";
});

// Add event listeners to the digit buttons
const digitButtons = document.querySelectorAll(".digit");
digitButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Update the display with the button's value
    if (display.textContent === "0") {
      display.textContent = button.value;
      currentValue += button.value;

    } else {
      display.textContent += button.value;
      currentValue += button.value;
    }
  });
});

// Add event listeners to the operator buttons
operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Update the display with the current display value
    const operator = button.textContent;
    display.textContent += button.value;
    operations.push({ value: currentValue, operator: operator });
    currentValue = "";
  });
});

const operate = (value1, operator) => {
  let result;

  // Perform the calculation using the value1 and currentValue operands
  switch (operator) {
    case "+":
      result = parseInt(value1) + parseInt(currentValue);
      break;
    case "-":
      result = parseInt(value1) - parseInt(currentValue);
      break;
    case "*":
      result = parseInt(value1) * parseInt(currentValue);
      break;
    case "/":
      result = parseInt(value1) / parseInt(currentValue);
      break;
  }
  display.textContent = result;
};

// Add the event listener to the equals button
equalsButton.addEventListener("click", () => {
  const value1 = operations[0]?.value;
  const operator = operations[0]?.operator;

  operate(value1, operator);
  operations = [];
});

  
  
  
  /*// Get the display element
  const display = document.querySelector("#display");
 // Get the equals button
 const equalsButton = document.querySelector("#equals");
  // Get the operator buttons
const operatorButtons = document.querySelectorAll(".operator");
  // Declare a global variable to store the display value
  let operations = [];
  let currentValue = "";
  let lastButton;
  

   // add a delete for the delete button
   const deleteButton = document.querySelector("#delete");
   deleteButton.addEventListener("click", () => {
     text = display.innerHTML;
     text = text.substring(0, text.length - 1);
     display.innerHTML = text;
   });
   //add a clear to the clear button
   const clearButton = document.querySelector("#clear");
   clearButton.addEventListener("click", () => {
     display.innerHTML = "";
   });

  // Add event listeners to the digit buttons
  const digitButtons = document.querySelectorAll(".digit");
  digitButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Update the display with the button's value
      if(display.textContent === "0") {
        display.textContent = button.value
        currentValue +=button.value;
        lastButton = button;
      }
        else{
      display.textContent += button.value;
      lastButton = button;
  }});
  });

// Add event listeners to the operator buttons
operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Update the display with the current display value
    const operator = button.textContent;
    display.textContent += button.value;
    operations.push({ value: currentValue, operator: operator });
    currentValue = "";
  });
});


const operate = (value1, operator) => {
    // Get the last button pressed from the global variable
  const lastButton = window.lastButton;
  let result;

    // Perform the calculation using the value1 and operator arguments
  switch (operator) {
    case "+":
      result = parseInt(value1) + parseInt(lastButton.value);
      break;
    case "-":
      result = parseInt(value1) - parseInt(lastButton.value);
      break;
    case "*":
      result = parseInt(value1) * parseInt(lastButton.value);
      break;
    case "/":
      result = parseInt(value1) / parseInt(lastButton.value);
      break;
  } 
    display.value = result;
  };

 // Add the event listener to the equals button
 equalsButton.addEventListener("click", event => {;
 const value1 = operations[0]?.value;
 const operator = operations[0]?.operator;

 operate(value1, operator);
});*/
"use strict";

// Promt the user to enter their name
let userName = promptWithValidation("Please enter your name:")
console.log(userName);

// Prompt the user to enter their gender
let yourGender = promptWithValidation("Please enter your gender (male or female):");

// Validate the gender input
if (yourGender === "male") {
  console.log("Gender: Male");
} else if (yourGender === "female") {
  console.log("Gender: Female");
} else {
  console.log("Invalid gender input!");
}

// Prompt the user to enter their age
let age = promptWithValidation("Please enter your age:");

// Check if the age is less than or equal to zero
if (age <= 0) {
  alert("Invalid age! Age must be greater than zero.");
}

// Prompt the user to confirm skipping the welcoming message
let skipMessage = confirm ("Do you want to skip the welcoming message")
console.log (skipMessage);

// Check if the user wants to skip the message
if (!skipMessage) {

// Customize the welcoming message based on the gender input
if (yourGender === "male") {
    alert("Welcome, Mr. " + userName + "!");
  } else if (yourGender === "female") {
    alert("Welcome, Ms. " + userName + "!");
  } else {
    alert("Welcome, " + userName + "!");
  }

}


// Function to prompt the user and handle empty input
function promptWithValidation(message) {
    let input = prompt(message);
    
    // If input is empty, consider it as "invalid"
    if (input.trim() === "") {
      input = "invalid";
    }
    
    return input;
  }
  
  // Function to print the answers in the console
  function printAnswers(answers) {
    console.log("Answers:");
    answers.forEach(function(answer, index) {
      console.log((index + 1) + ". " + answer);
    });
  }
  
  // More questions
  let theAnswers = [];
  
  // Prompt the user with additional questions
  let question1 = promptWithValidation("Question 1: Does your work needs organizing? (Yes/No):");
  theAnswers.push(question1);
  
  let question2 = promptWithValidation("Question 2: Would you like to have an organized To-Do-List? (Yes/No):");
  theAnswers.push(question2);
  
  let question3 = promptWithValidation("Question 3: Do you have a busy day? (Yes/No):");
  theAnswers.push(question3);
  
  // Print the answers
  printAnswers(theAnswers);

  
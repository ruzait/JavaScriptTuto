// Select the message element and button element
const messageElement = document.getElementById("message");
const changeTextButton = document.getElementById("changeTextBtn");

// Add an event listener to the button
changeTextButton.addEventListener("click", () => {
  // Change the content of the message element
  messageElement.textContent = "You clicked the button! Hello, JavaScript!";
});
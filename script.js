


// List of strings to type
var stringsToType = ["Web Developer", "Engineer", "Astronomer", "Hi mom", "Kevin Nguyen"];
// Index of the current string being typed
var currentStringIndex = 0;
// Get the element where the typing animation will be displayed
var typingTextElement = document.getElementById('typingText');

// Function to type the current string
function typeCurrentString() {
  // Get the current string
  var currentString = stringsToType[currentStringIndex];
  
  // Clear the displayed text
  typingTextElement.textContent = '';
  
  // Type the characters of the current string one by one
  for (var i = 0; i < currentString.length; i++) {
    // Schedule typing each character with a delay
    setTimeout(function(character) {
      return function() {
        typingTextElement.textContent += character;
      };
    }(currentString[i]), i * 100); // Adjust typing speed (in milliseconds) as needed
  }
  
  // Move to the next string after a delay
  setTimeout(function() {
    currentStringIndex++;
    // If reached the end of the list, start over
    if (currentStringIndex >= stringsToType.length) {
      currentStringIndex = 0;
    }
    // Start typing the next string
    typeCurrentString();
  }, 5000); // Adjust delay (in milliseconds) between sentences as needed
}

// Start the typing animation
typeCurrentString();



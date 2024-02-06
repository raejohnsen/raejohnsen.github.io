  // Array of words
  var wordsArray = ["The", "Library", "of", "Babel"];
        
  // Function to generate random words without repetition
  function getRandomWords(numWords) {
    var randomWords = [];
    var availableWords = wordsArray.slice(); // Create a copy of the original array

    for (var i = 0; i < numWords; i++) {
      var randomIndex = Math.floor(Math.random() * availableWords.length);
      var selectedWord = availableWords.splice(randomIndex, 1)[0]; // Remove the selected word from the array
      randomWords.push(selectedWord);
    }
    return randomWords;
  }

  // Display random words on the page
  function displayRandomWords() {
    var wordContainer = document.getElementById("wordContainer");
    var randomWords = getRandomWords(4);

    // Clear previous content
    wordContainer.innerHTML = "";

    // Append new word boxes
    randomWords.forEach(function(word) {
      var wordBox = document.createElement("div");
      wordBox.className = "wordBox";
      wordBox.textContent = word;
      wordContainer.appendChild(wordBox);
    });
  }

  // Call the function to display random words when the page loads
  displayRandomWords();
'use strict';

// Copy the array to a new variable.
// This will hold the remaining quotes that haven't been shown.
let remainingQuotes = quotes.slice();

function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

// Return a random quote object.
// There are 19 quote objects defined in the "quotes.js" file.
// Loops through all 19 quotes before showing the same quotes again.
function getRandomQuote() {
  // If the quotes array is empty, restore the list.
  if (remainingQuotes.length == 0) {
      remainingQuotes = quotes.slice();
  }
  // Get a number inclusively between 0 and the last index of quotesLeft.
  let randIdx = Math.floor(Math.random()*remainingQuotes.length)
  // The quote that will be returned using the random index.
  let quote = remainingQuotes[randIdx];
  // Remove the quote from the list of quotes.
  remainingQuotes.splice(randIdx, 1);
  // Return the quote.
  return quote;
}

// Gets a quote.
function printQuote() {
  let randQuote = getRandomQuote();
  let quoteBox = document.getElementById('quote-box');
  let message = `<p class="quote"> ` + randQuote.quote + ` </p>
  <p class="source"> ` + randQuote.source+ `</p>`;
  quoteBox.innerHTML = message;
}

document.getElementById("button").addEventListener("click", function(){
    printQuote();
});
printQuote();

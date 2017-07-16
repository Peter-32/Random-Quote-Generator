'use strict';

///////////////////////////
// START OF OF FUNCTIONS //
///////////////////////////

// Return a random quote object.
// There are 19 quote objects defined in the "quotes.js" file.
// Loops through all 19 quotes before showing the same quotes again.
const getRandomQuote = () => {
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

// Find a random quote, build a message, and push the message into the HTML.
const printQuote = () => {
  let randQuote = getRandomQuote();
  let message = `<p class="quote"> ` + randQuote.quote + ` </p>
  <p class="source"> ` + randQuote.source+ `</p>`;
  document.getElementById('quote-box').innerHTML = message;
}

/////////////////////////
// END OF OF FUNCTIONS //
/////////////////////////

// Initialize a copy of the quotes array.
// Its purpose is to hold the remaining quotes that haven't been shown yet.
// It will get refilled after all quotes are viewed.
let remainingQuotes = quotes.slice();
// Display the initial quote.
printQuote();
// Make the button interactive.
document.getElementById("button").addEventListener("click", function(){
    printQuote();
});

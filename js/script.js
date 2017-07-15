'use strict';

function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

// Return a random quote object.
// There are 19 quote objects defined in the "quotes.js" file.
function getRandomQuote() {
  // Get a number inclusively between 0 and 18.
  let randNumber = Math.floor(Math.random()*19)
  // Return the quote at the random index.
  return quotes[randNumber];
}

// Gets a quote.
function printQuote() {
  let randQuote = getRandomQuote();
  let quoteBox = document.getElementById('quote-box');
  let message = `<p class="quote"> ` + randQuote.quote + ` </p>
  <p class="source"> ` + randQuote.source+ `</p>`;
  quoteBox.innerHTML = message;
}
printQuote();

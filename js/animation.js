/*
const phrases = [
    "Entrepreneurial","Leadership","Startup","Management","Technology","Finance"
  ];
  const speed = 70; // Typing speed in milliseconds
  let currentPhrase = 0;
  let index = 0;
  let direction = 1; // 1 for typing, -1 for backspacing
  function type() {
    // Get the current phrase
    const phrase = phrases[currentPhrase];
    // Set the text content of the typing span
    $('#typing').text(phrase.substring(0, index + 1));
    // Check if the typing is complete or backspacing is required
    if (index === phrase.length && direction === 1) {
      // Wait for 300 milliseconds before backspacing
      setTimeout(function() {
        direction = -1;
      }, 800);
    } else if (index === 0 && direction === -1) {
      // Move to the next phrase
      currentPhrase++;
      if (currentPhrase === phrases.length) {
        currentPhrase = 0;
      }
      direction = 1;
    }
    // Update the index
    index += direction;
    // Set the typing speed
    const delay = (direction === 1) ? speed : speed / 2;
    // Call the type function recursively after the delay
    setTimeout(type, delay);

  }
  type();

  // var colors = ["#884A39", "#F79327", "#643843", "#CE5959", "#B46060", "#F2921D", "#9D3C72", "#B01E68"];
  var colors = ["#FE0000", "#071952", "#1A5D1A", "#B31312", "#4C0070"];


  function changeColor() {
    var randomIndex = Math.floor(Math.random() * colors.length);
    var color = colors[randomIndex];
    document.getElementById("typing").style.color = color;
  }
  setInterval(function() {
    changeColor();
  }, 1000);
*/
const phrases = [
  "Entrepreneurial", "Leadership", "Startup", "Management", "Technology", "Finance"
];
const speed = 1500; // Time interval to display each word in milliseconds
let currentPhrase = 0;

function displayPhrase() {
  // Get the current phrase
  const phrase = phrases[currentPhrase];
  // Set the text content of the typing span
  document.getElementById('typing').textContent = phrase;
  // Move to the next phrase
  currentPhrase++;
  if (currentPhrase === phrases.length) {
    currentPhrase = 0;
  }
}

// Start the word changing process
setInterval(displayPhrase, speed);

var colors = [ "#071952", "#557A46","#411530", "#1A5D1A", "#B31312", "#4C0070"];

function changeColor() {
  var randomIndex = Math.floor(Math.random() * colors.length);
  var color = colors[randomIndex];
  document.getElementById("typing").style.color = color;
}

// Start the color changing process
setInterval(changeColor, 1500);
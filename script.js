// RGB Colors

// Variables to store HTML Elements
let redInEl = document.getElementById("redIn");
let greenInEl = document.getElementById("greenIn");
let blueInEl = document.getElementById("blueIn");
let rgbStringOutEl = document.getElementById("rgbStrOut");
let displayEl = document.getElementById("display");

// Event Listeners
redInEl.addEventListener("input", rgbPreview);
greenInEl.addEventListener("input", rgbPreview);
blueInEl.addEventListener("input", rgbPreview);
// Event Function
function rgbPreview() {
  // Input: get red green blue values
  let rValue = +redInEl.value;
  let gValue = greenInEl.value;
  let bValue = blueInEl.value;

  // Validate Colors (Constrain colors between 0 - 255)
  // Check rValue
  if (rValue < 0) {
    rValue = 0;
    redInEl.value = 0;
  } else if (rValue > 255) {
    rValue = 255;
    redInEl.value = 255;
  }

  // Check gValue
  if (gValue < 0) {
    gValue = 0;
    greenInEl.value = 0;
  } else if (gValue > 255) {
    gValue = 255;
    greenInEl.value = 255;
  }

  // Check bValue
  if (bValue < 0) {
    bValue = 0;
    blueInEl.value = 0;
  } else if (bValue > 255) {
    bValue = 255;
    blueInEl.value = 255;
  }

  // Process: build rgb string rbg(___, ___, ___)
  let rgbString = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";

  // Output: display rgb string and update the color preview
  rgbStringOutEl.innerHTML = rgbString;
  displayEl.style.background = rgbString;
}
// Preview Function
// Preview Variables
let widthInEl = document.getElementById("pWidth");
let heightInEl = document.getElementById("pHeight");
// Event Listener (Preview)
widthInEl.addEventListener("input", changeSize);
heightInEl.addEventListener("input", changeSize);

// Function
function changeSize() {
  // Inputs
  let wValue = +widthInEl.value;
  let hValue = +heightInEl.value;

  if (wValue < 50) {
    wValue = 50;
    widthInEl.value = 50;
  } else if (wValue > 400) {
    wValue = 400;
    widthInEl.value = 400;
  }

  if (hValue < 50) {
    hValue = 50;
    heightInEl.value = 50;
  } else if (hValue > 200) {
    hValue = 200;
    heightInEl.value = 200;
  }
  // Process
  let widthOut = wValue + "px";
  let heightOut = hValue + "px";

  // Output
  displayEl.style.width = widthOut;
  displayEl.style.height = heightOut;
}

// black n white button

// Variables
let black = document.getElementById("blackIn");
let white = document.getElementById("whiteIn");

// Event Listener

black.addEventListener("click", changeBlack);
white.addEventListener("click", changeWhite);

// Function
function changeBlack() {
  displayEl.style.background = "black";
}

function changeWhite() {
  displayEl.style.background = "white";
}

// Function 1 to split a string by spaces and return an array of substrings
function words(str) {
  return str.split(" ");
}

// Function 2 to join an array of strings with spaces and return a single string
function sentence(arr) {
  return arr.join(" ");
}

// Function 3 to convert a string to upper case
function yell(str) {
  return str.toUpperCase();
}

// Function 4 to convert a string to lower case and surround it with *
function whisper(str) {
  return "*" + str.toLowerCase() + "*";
}

// Function 5 to capitalize the first character of a string and convert the rest to lower case
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

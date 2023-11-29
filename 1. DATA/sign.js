
// Function to determine the sign of a number
function sign(number) {
  if (number > 0) {
    return 1; // Return 1 if the number is positive
  } else if (number < 0) {
    return -1; // Return -1 if the number is negative
  } else {
    return 0; // Return 0 if the number is exactly 0
  }
}

// Function to check if two numbers have the same sign
function sameSign(number1, number2) {
  return sign(number1) === sign(number2); // Return true if both numbers have the same sign, false otherwise
}

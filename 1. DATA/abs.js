// Function to check if a number is strictly positive
function isPositive(number) {
  // Check if the number is greater than 0
  if (number > 0) {
    return true; // Return true if the number is strictly positive
  } else {
    return false; // Return false if the number is not strictly positive
  }
}

// Function to calculate the absolute value of a number
function abs(number) {
  // Check if the number is negative
  if (number < 0) {
    return -number; // Return the negation of the number if it is negative
  } else {
    return number; // Return the number itself if it is non-negative
  }
}

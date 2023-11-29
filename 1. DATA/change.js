// Arrow function to get the value for a given key
const get = (key) => sourceObject[key];

// Arrow function to set the value for a given key and return the updated value
const set = (key, value) => {
  sourceObject[key] = value;
  return sourceObject[key];
};
  // Check if value is a number
  is.num = (value) => typeof value === 'number';

  // Check if value is NaN
  is.nan = (value) => Number.isNaN(value);

  // Check if value is a string
  is.str = (value) => typeof value === 'string';

  // Check if value is a boolean
  is.bool = (value) => typeof value === 'boolean';

  // Check if value is undefined
  is.undef = (value) => typeof value === 'undefined';

  // Check if value is defined
  is.def = (value) => typeof value !== 'undefined';

  // Check if value is an array
  is.arr = (value) => Array.isArray(value);

  // Check if value is a simple object or null object
  is.obj = (value) => typeof value === 'object' && !is.fun(value) && !is.arr(value) && value !== null;

  // Check if value is a function
  is.fun = (value) => typeof value === 'function';

  // Check if value is truthy
  is.truthy = (value) => Boolean(value);

  // Check if value is falsy
  is.falsy = (value) => !value;

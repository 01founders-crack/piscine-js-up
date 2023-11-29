  // Creating shallow copies of the person object
  const clone1 = { ...person };
  const clone2 = Object.assign({}, person);
  const samePerson = person; // Reference to the original object
  
  // Modifying the original person object
  person.age += 1;
  person.country = 'FR';
  
  // Outputting the values
  console.log('Original person:', person);
  console.log('Clone 1:', clone1);
  console.log('Clone 2:', clone2);
  console.log('Same Person:', samePerson);
  
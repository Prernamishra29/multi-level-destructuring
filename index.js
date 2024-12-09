// Input: Array of people objects
const people = [
    { 
      name: "Alice", 
      address: { 
        city: "New York", 
        street: { name: "Broadway", number: 123 } 
      } 
    },
    { 
      name: "Bob", 
      address: { 
        city: "Los Angeles", 
        street: { name: "Sunset Boulevard", number: 456 } 
      } 
    }
  ];
  
  // Function to extract details using multi-level destructuring
  const getDetails = (people) => {
    return people.map(({ name, address: { city, street: { name: streetName } } }) => 
      `${name} lives in ${city} on ${streetName}`
    );
  };
  
  // Call the function and display the output
  console.log(getDetails(people));
  
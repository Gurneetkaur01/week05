const minMax = (arr) => {
    return {
      min: Math.min(...arr),
      max: Math.max(...arr)
    };
  };
  
  const userInput = prompt("Enter a list of numbers separated by commas:");
  const numbersArray = userInput.split(',').map(Number);
  
  const result = minMax(numbersArray);
  
  console.log(`The minimum is ${result.min} and the maximum is ${result.max}.`);
  
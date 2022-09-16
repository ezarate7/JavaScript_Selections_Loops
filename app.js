for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      console.log("odd number: ", i);
    }
  }
  
  // Exercise 2 Section
  console.log("EXERCISE 2: FIZZBUZZ \n==========\n");
  console.log("For Loop");
  
  for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
      console.log("FIZZBUZZ: ", i);
    } else if (i % 5 == 0) {
      console.log("BUZZ: ", i);
    } else if (i % 3 == 0) {
      console.log("FIZZ: ", i);
    }
  }
  
  // Exercise 2 Section
  console.log("EXERCISE 2: FIZZBUZZ Refactored \n==========\n");
  
  for (let i = 1; i <= 100; i++) {
    let output = "";
    if (i % 3 == 0) {
      output += "Fizz";
    }
    if (i % 5 == 0) {
      output += "Buzz";
    }
    if (output !== "") {
      console.log(`${i} ${output}`);
    }
  }
  
  // Exercise 3 Section
  console.log("EXERCISE 3:\n==========\n");
  console.log("Rewrite Exercise 1 as a While Loop");
  i = 1;
  while (i <= 100) {
    if (i % 2 !== 0) {
      console.log("odd number: ", i);
    }
    i++;
  }
  
  console.log("Rewrite Exercise 1 as a Do/ While Loop");
  
  i = 1;
  do {
    if (i % 2 !== 0) {
      console.log("odd number: ", i);
    }
    i++;
  } while (i <= 100);
  
  // Exercise 3 Section
  console.log("EXERCISE 3:\n==========\n");
  console.log("Rewrite Exercise 2 as a While Loop");
  i = 1;
  while (i <= 100) {
    if (i % 15 == 0) {
      console.log("FIZZBUZZ: ", i);
    } else if (i % 5 == 0) {
      console.log("BUZZ: ", i);
    } else if (i % 3 == 0) {
      console.log("FIZZ: ", i);
    }
    i++;
  }
  
  // Exercise 3 Section
  console.log("EXERCISE 3:\n==========\n");
  console.log("Rewrite Exercise 2 as a Do/While Loop");
  i = 1;
  do {
    if (i % 15 == 0) {
      console.log("FIZZBUZZ: ", i);
    } else if (i % 5 == 0) {
      console.log("BUZZ: ", i);
    } else if (i % 3 == 0) {
      console.log("FIZZ: ", i);
    }
    i++;
  } while (i <= 100);
  
  // Exercise 4 Find Value
  console.log("EXERCISE 4:Find Value \n==========\n");
  let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
  let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
  console.log("Random Number ", value);
  console.log("Range to Check ", n);
  
  let valueFound = false;
  for (let x = 0; x <= n; x++) {
    if (value == x) {
      console.log("Found value ", value);
      valueFound = true;
      break;
    }
  }
  if (!valueFound) {
    console.log("Value Not Found ", value);
  }
  
  //Exercise 5: Customized FIZZBUZZ#
  console.log("EXERCISE 5: Customized FizzBuzz\n==========\n");
  let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
  let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
  let end = Math.round(Math.random() * (1000 - 1) + 1);
  let start = Math.round(Math.random() * (10 - 1) + 1);
  
  console.log("fizzDivisor: ", fizzDivisor);
  console.log("buzzDivisor: ", buzzDivisor);
  console.log("start, ", start);
  console.log("end: ", end);
  
  for (i = start; i <= end; i++) {
    if (i % (buzzDivisor * fizzDivisor) == 0) {
      console.log("FIZZBUZZ: ", i);
    } else if (i % buzzDivisor == 0) {
      console.log("BUZZ: ", i);
    } else if (i % fizzDivisor == 0) {
      console.log("FIZZ: ", i);
    }
  }
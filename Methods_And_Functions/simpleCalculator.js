function simpleCalculator(numOne, numTwo, operator) {
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    let results = 0;

    switch (operator) {
        case "multiply":
            results = multiply(numOne, numTwo);            
            break;
        case "divide":
            results = divide(numOne, numTwo);
            break;
        case "add":
            results = add(numOne, numTwo);
            break;
        case "subtract":
            results = subtract(numOne, numTwo);
            break;
      }

       console.log(results);

}

simpleCalculator(5, 5, "add");
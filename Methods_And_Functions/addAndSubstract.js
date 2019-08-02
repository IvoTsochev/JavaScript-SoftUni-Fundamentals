function solve(a, b, c) {
    let sum = (firstNum, secondNum) => firstNum + secondNum;
    let subtract = (result, thirdNum) => result - thirdNum;

    let result = sum(a, b);
    // console.log(subtract(result, c));

    let finalOutcome = (a, b) => a - b;

    return finalOutcome(result, c);
    
}

console.log(solve(23,6,10));


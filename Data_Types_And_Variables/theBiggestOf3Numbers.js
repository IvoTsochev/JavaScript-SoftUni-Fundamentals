function solve(num1, num2, num3) {
    let minNumber = -Infinity;
    if (num1 > minNumber) {
        minNumber = num1;
    }
    if (num2 > minNumber) {
        minNumber = num2;
    }
    if (num3 > minNumber) {
        minNumber = num3;
    }
    console.log(minNumber);
    
}

solve(130, 5, 99);
function solve(startingYield) {
    let totalSum = 0;
    let daysCounter = 0;

    while (startingYield >= 100) {
        daysCounter += 1;
        let atTheMoment = startingYield - 26;
        totalSum += atTheMoment;
        startingYield -= 10
    }

    if (totalSum > 25) {
        totalSum -= 26;
    }
    
    console.log(daysCounter);
    console.log(totalSum);
}

solve(111);
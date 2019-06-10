function oddAndEvenSum(num) {
    let numToString = num.toString().split("");
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < numToString.length; i++) {
        if (i % 2 === 0) {
            evenSum += Number(numToString[i]);
        } else {
            oddSum += Number(numToString[i]);
        }
        
    }

    

    console.log(`Odd sum = ${evenSum}, Even sum = ${oddSum}`);
    
}

oddAndEvenSum(1000435);
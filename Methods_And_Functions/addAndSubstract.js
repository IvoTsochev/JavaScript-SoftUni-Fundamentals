function sumAndSubstract(numOne, numTwo, numThree) {
    let sumFirstTwoElements = (a, b) => a + b;
    let subFromTheSum = (a, b) => sumFirstTwoElements - numThree;

    return subFromTheSum();
}

console.log(sumAndSubstract(23,
    6,
    10
    ));

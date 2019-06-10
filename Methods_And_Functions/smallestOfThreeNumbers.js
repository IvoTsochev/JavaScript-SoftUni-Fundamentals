function smallestNum(numOne, numTwo, numThree) {
    let biggestNum = +Infinity;

    if (numOne < biggestNum) {
        biggestNum = numOne;
    }   
    if (numTwo < biggestNum) {
        biggestNum = numTwo;
    }
    if (numThree < biggestNum) {
        biggestNum = numThree;
    }

    return biggestNum;
}

console.log(smallestNum(2,5,3));

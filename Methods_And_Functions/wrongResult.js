function positiveOrNot(numOne, numTwo, numThree) {
    if (numOne == 0 || numTwo == 0 || numThree == 0) {
        console.log("Positive");
    } else if (numThree > 0) {
        console.log("Positive");
    } else if (numThree < 0) {
        console.log("Negative");
    } else {
        console.log("Negative");
        
    }
}

positiveOrNot(5,
    12,
    -15);
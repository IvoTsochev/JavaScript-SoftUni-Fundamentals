function solve(number) {
    
    let digit = (""+number).split('');

    let reverseDigit = digit.reverse();

    let firstIndex = reverseDigit[0];

    if (firstIndex == 1) {
        console.log("one");
    } else if (firstIndex == 2) {
        console.log("two");
    } else if (firstIndex == 3) {
        console.log("three");
    } else if (firstIndex == 4) {
        console.log("four");
    } else if (firstIndex == 5) {
        console.log("five");
    } else if (firstIndex == 6) {
        console.log("six");
    } else if (firstIndex == 7) {
        console.log("seven");
    } else if (firstIndex == 8) {
        console.log("eight");
    } else if (firstIndex == 9) {
        console.log("nine");
    } else if (firstIndex == 10) {
        console.log("ten");
    }
}

solve(1643);
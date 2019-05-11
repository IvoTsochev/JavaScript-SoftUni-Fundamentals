function reverseString(word) {
    
    let splitString = word.split("");

    let reverseArray = splitString.reverse();

    let joinArray = reverseArray.join("");

    console.log(joinArray);
}

reverseString('Hello');
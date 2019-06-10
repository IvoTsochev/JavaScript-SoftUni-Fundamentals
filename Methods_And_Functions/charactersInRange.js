function solve(firstChar, secondChar) {
    let firstCode = firstChar.charCodeAt(0);
    let secondCode = secondChar.charCodeAt(0);

    let newNumArr = [];

    for (let i = firstCode + 1; i < secondCode; i++) {
        newNumArr += i + " ";
    }

    let splittedArr = newNumArr.split(" ");
    // console.log(splittedArr);

    let result = "";
    
    for (let j = 0; j <= splittedArr.length; j++) {
        result += " " + (String.fromCharCode(splittedArr[j]));
    }

    return result;
    

}

console.log(solve('C', '#'));
function replace (input) {
    let splittedChars = input.split('');
    let joinedArr = [];
    let lastElementOfArr = [];

    for (let char of splittedChars) {
        lastElementOfArr = joinedArr[joinedArr.length - 1];
        // console.log(lastElementOfArr);
        if ( char !== lastElementOfArr) {
            joinedArr.push(char);
        }
    }

    return joinedArr.join('');
}

console.log(replace('aaaaabbbbbcdddeeeedssaa')); 
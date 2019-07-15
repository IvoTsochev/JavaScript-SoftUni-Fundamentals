function solve(str, startIndex, countIndex) {

    let startOfWord = str.substring(startIndex);
    let endOfWord = startOfWord.substring(0, countIndex);

    console.log(endOfWord);
}

solve('ASentance', 1, 8);
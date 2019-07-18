
function findTheWord (theWord, text) {
    let splittedText = text.split(' ');

    let isFound = false;

    for (let word of splittedText) {
        if (word.toLowerCase() === theWord.toLowerCase()) {
            isFound = true;
            break;
        }
    }

    if (isFound) {
        console.log(theWord);
    } else {
        console.log(`${theWord} not found!`);
    }

}

findTheWord(
    'python',
    'JavaScript is the best programming language'
    );
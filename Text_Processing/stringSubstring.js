//not finished

function findTheWord (theWord, text) {
    let splittedText = text.split(' ');

    for (let word of splittedText) {
        if (word === theWord) {
            console.log(theWord);
            break;
        }
    }

}

findTheWord(
            'javascript',
            'JavaScript is the best programming language');
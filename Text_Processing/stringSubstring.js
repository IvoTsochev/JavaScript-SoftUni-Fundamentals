//not finished

function findTheWord (theWord, text) {
    let splittedText = text.split(' ');
    let output = `${theWord} not found!`
    let originalWord = theWord;

    for (let word of splittedText) {
        if (word.toLowerCase() == theWord.toLowerCase()) {
            output = `${originalWord}`;
            console.log(output);
            break;
        } 
    }

}

findTheWord(
            'python',
            'JavaScript is the best programming language');
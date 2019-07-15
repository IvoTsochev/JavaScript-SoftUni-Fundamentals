function solve(sentance, theWord) {
    let splittedSentance = sentance.split(' ');
    let counter = 0;

    for (let word of splittedSentance) {
        if ( word === theWord) {
            counter++;
        }
    }
    console.log(counter);
}

solve(  "This is a word and it also is a sentence",
        "is");
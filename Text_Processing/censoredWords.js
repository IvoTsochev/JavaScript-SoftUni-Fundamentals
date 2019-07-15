function solve(sentance, theWord) {
    let copy = sentance;
    let theWordLength = theWord.length;
    let stars = '*'.repeat(theWordLength);

    copy = copy.replace(new RegExp(theWord, 'gi') , stars);
    console.log(copy);
}

solve(  "A small sentence with some words", 
        "small")
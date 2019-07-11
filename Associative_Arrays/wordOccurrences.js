//not sorted


function solve (words) {
    let wordCount = {};

    for (let word of words) {
        if (!wordCount.hasOwnProperty(word)) {
            wordCount[word] = 1;
        } else {
            wordCount[word]++;
        }
    }

    let sortedArr = [];

    for (let word in wordCount) {
        sortedArr.push(word, wordCount[word]);
    }

    sortedArr.sort((a, b) => b[1] - a[1]);

    console.table(sortedArr);
    // console.log(wordCount);
}

solve([ 'Here',
        'is',
        'the',
        'first',
        'sentence',
        'Here',
        'is',
        'another',
        'sentence',
        'And',
        'finally',
        'the',
        'third',
        'sentence' ]);
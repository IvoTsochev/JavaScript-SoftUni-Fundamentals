function wordTracker(input) {
    
    let words = input
        .shift()
        .split(" ");

        let wordsCount = {};
        for (let word of words) {
            wordsCount[word] = 0;
        }
    
    for (let currentWord of input) {
        if (wordsCount.hasOwnProperty(currentWord)) {
            wordsCount[currentWord]++;
        }
    }
    
    let sortedWords = Object.entries(wordsCount)
        .sort((firstPair, secondPair) =>{
            let [ firstWord, firstOccurence ] = firstPair;
            let [ secondWord, secondOccurence ] = secondPair;

            return secondOccurence - firstOccurence;
        });

    for (let [ word, occurance] of sortedWords) {
        console.log(`${word} - ${occurance}`);
        
    }
}

wordTracker(
        [
        'sentence this',
        'In','this','sentence','you','have','to','count','the','occurances','of','the'
        ,'words','this','and','sentence','because','this','is','your','task'
        ]
        
);
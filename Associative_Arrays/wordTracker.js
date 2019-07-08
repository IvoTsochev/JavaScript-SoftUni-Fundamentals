//not sorted


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
    
}

wordTracker(
        [
        'this sentence',
        'In','this','sentence','you','have','to','count','the','occurances','of','the'
        ,'words','this','and','sentence','because','this','is','your','task'
        ]
        
);
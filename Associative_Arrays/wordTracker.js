//not sorted


function wordTracker(input) {
    let array = input.slice(0);
    let searchedWords = array
        .shift()
        .split(" ");
    let firstWord = searchedWords[0];
    let secondWord = searchedWords[1];
    let counter = {
        [firstWord]: 0,
        [secondWord]: 0,
    };

    for (let element of array) {
        if (firstWord === element) {
            counter[firstWord] += 1;
        }
        if (secondWord === element) {
            counter[secondWord] += 1;
        }
    }
        
    let sortableCounter = [];
    for (let num in counter) {
        sortableCounter.push(num, counter[num]);
    }

    sortableCounter.sort((a, b) => a - b);
    
    let anotherObject= {};
    for (let i = 0; i < sortableCounter.length; i += 2) {
        anotherObject[sortableCounter[i]] = sortableCounter[i + 1];
    }

    let entries = Object.entries(anotherObject);

    for (let [key, value] of entries) {
        console.log(`${key} - ${value}`);
        
    }
    
}

wordTracker(
        [
        'this sentence',
        'In','this','sentence', `sentence`, `sentence`,'you','have','to','count','the','occurances','of','the'
        ,'words','this','and','sentence','because','this','is','your','task`, `sentence` , `sentence`'
        ]
        
);
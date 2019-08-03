function solve (input) {
    let theString = input.shift();

    for (let line of input) {
        let tokens = line.split(' ');
        let command = tokens[0];

        if (command === 'Translate') {
            let firstChar = tokens[1];
            let replacement = tokens[2];
            theString = theString.split(firstChar).join(replacement);
            console.log(theString);
        } else if (command === 'Includes') {
            let isIncluding = tokens[1];
            let isItTrue = theString.includes(isIncluding);
            if (isItTrue) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command === 'Start') {
            let starting = tokens[1];
            let isStarting = theString.startsWith(starting); 
            if (isStarting) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command === 'Lowercase') {
            theString = theString.toLowerCase();
            console.log(theString); 
        } else if (command === 'FindIndex') {
            let lastIndex = tokens[1];
            console.log(theString.lastIndexOf(lastIndex));
        } else if (command === 'Remove') {
            let startingIndex = Number(tokens[1]);
            let endingIndex = Number(tokens[2]);
            let removingText = theString.substring(startingIndex, endingIndex);
            console.log(theString.replace(removingText, ''));

        } else if (command === 'End') {
            break;
        }
        
    }

}

solve(
    [   '//Thi5 I5 MY 5trING!//',
        'Translate 5 s',
        'Includes string',
        'Start //This',
        'Lowercase',
        'FindIndex i',
        'Remove 0 10',
        'End' ]

);



    // function lowerCase (text) {
    //     text = text.toLowercase();

    //     return text;
    // }

    // function translate (text) {
    //     return theString.replace()
    // }
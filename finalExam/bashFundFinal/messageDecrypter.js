function solve (input) {
    let counter = 0
    let rows = Number(input.shift());

    for (let line of input) {
        let tokens = line.split(' ');
        let name = tokens[0];
        let group = tokens[1].split('|');
        let groupLength = group.length;
        if (group[3] === '') {
            groupLength = group.length - 1;
        }
        
        let regex = /^([$%])[A-Z][a-z]+\1:/g;
        
        if (regex.test(name) && groupLength === 3) {
            let fuckinPopped = group.pop();
            let regexNumber = /\d+/g;
            let fuckinWord = '';

            let firstNum = Number(group[0].match(regexNumber));
            let firstNumToChar = String.fromCharCode(firstNum);
            
            let secondNum = Number(group[1].match(regexNumber));
            let secondNumToChar = String.fromCharCode(secondNum);

            let thirdNum = Number(group[2].match(regexNumber));
            let thirdNumToChar = String.fromCharCode(thirdNum);

            fuckinWord = `${firstNumToChar}${secondNumToChar}${thirdNumToChar}`;

            name = name.split('$').join('');
            name = name.split('%').join('');


            console.log(`${name} ${fuckinWord}`);

        }else {
            console.log('Valid message not found!');
        }        
        counter++;
        if (counter === rows) {
            break;
        }
    }

}

solve(
    [   '3',
        'This shouldnt be valid%Taggy%: [118]|[97]|[108]|',
        '$tAGged$: [97][97][97]|',
        '$Request$: [73]|[115]|[105]|true' ]

);
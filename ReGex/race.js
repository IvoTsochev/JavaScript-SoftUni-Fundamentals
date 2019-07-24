function solve(input) {
    let participants = input.shift().split(', ');
    let results = {};

    input.forEach((line) => {
//с регекс намираме имената и числата за дистанцията
        let namePattern = /[A-Za-z]/gm;
        let distancePattern = /[\d]/gm;

        let name = line.match(namePattern).join('');
//ако името от реде е участник, изчисляваме дистанцията му с reduce
        if (participants.includes(name)) {
            let distance = line
                            .match(distancePattern)
                            .reduce((a, b) => +a + +b, 0);
//ако всичко е валидно го слагаме в обекта
            if (!results[name]) {
                results[name] = 0;
            } 

            results[name] += distance;
        };
        
    });

//сортировка на масив по values и взимане на Топ 3    
    let topThree = Object.keys(results)
    .sort((a, b) => results[b] - results[a])
    .slice(0, 3)
    .forEach((participants, i) => {
//използваме втория параметър на forEach (i) за да изпринтираме мястото
        let p = '';

        switch (i) {
            case 0:
                p = 'st';
                break;
            case 1:
                p = 'nd';
                break;
            case 2:
                p = 'rd';
                break;
        };
        console.log(`${i+1}${p} place: ${participants}`); 
    });
}

solve(['George, Peter, Bill, Tom',
        'G4e@55or%6g6!68e!!@',
        'R1@!3a$y4456@',
        'B5@i@#123ll',
        'G@e54o$r6ge#',
        '7P%et^#e5346r',
        'T$o553m&6',
        'end of race']);
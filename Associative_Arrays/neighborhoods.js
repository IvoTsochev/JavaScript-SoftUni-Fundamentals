function solve(input) {
    let map = new Map();
    let neighboorhoods = input.shift().split(', ');


    for (const neighboorhood of neighboorhoods) {
        map.set(neighboorhood, []);
    }
    for (let i = 0; i < input.length; i++) {
        
        let [neighboorhood, person] = input[i].split(' - ');
        if (neighboorhoods.includes(neighboorhood)) {
            map.get(neighboorhood).push(person)
        }
    }


    let mapEntries = [...map.entries()];

    mapEntries.sort((a, b) => b[1].length - a[1].length)
    for (const line of mapEntries) {
        console.log(`${line[0]}: ${line[1].length}`);
        for (let i = 0; i < line[1].length; i++) {
            console.log(`--${line[1][i]}`);
            
        }
    }


}
solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
)
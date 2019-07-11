//not finished


function solve (input) {
    let schoolBook = {};

    for (let line of input) {
        let splittedLine = line.split(" ");
        let name = splittedLine.shift();
        let grades = splittedLine.map(Number);
        // console.log(grades);

        if ( !schoolBook.hasOwnProperty(name)) {
            schoolBook[name] = [...grades];
        } else {
            schoolBook[name] += [...grades];
        }
    }

    console.log(schoolBook);
}

solve([ 'Lilly 4 6 6 5', 
        'Tim 5 6', 
        'Tammy 2 4 3', 
        'Tim 6 6' ])
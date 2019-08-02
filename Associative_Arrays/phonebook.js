function solve(input) {
    let phonebook = {};
    
    for (let element of input) {
        let line = element.split(" ");
        let name = line[0];
        let phone = line[1];

        phonebook[name] = phone;
    }

    
    let entries = Object.entries(phonebook);
    
    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }

}

solve([ 'Tim 0834212554',
        'Peter 0877547887',
        'Bill 0896543112',
        'Tim 0876566344' ]
    )
function solve(name, lastName, hairColor) {
    let person = {};
    person.name = name;
    person.lastName = lastName;
    person.hairColor = hairColor;

    
    console.log(JSON.stringify(person));
    
    
    // let entries = Object.entries(person);
    // for (let [ key, value] of entries) {
    //     console.log(`${key} -> ${value}`);
        
    // }
}

solve(  'George',
        'Jones',
        'Brown');
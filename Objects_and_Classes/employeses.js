function solve(arr) {
    let person = {};

    for (let i = 0; i < arr.length; i++) {
        person.name = arr[i];
        person.number = arr[i].length;
        console.log(`Name: ${person.name} -- Personal Number: ${person.number}`);
        
    }

    
    
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )
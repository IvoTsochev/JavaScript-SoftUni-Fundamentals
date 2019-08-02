function solve(jsonString) {
    let person = JSON.parse(jsonString);
    // console.log(person);
    let entries = Object.entries(person);

    for (let [ key, value] of entries) {
        console.log(`${key}: ${value}`);
        
    }
    
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');
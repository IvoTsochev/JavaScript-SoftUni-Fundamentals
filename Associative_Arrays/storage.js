function solve(input) {
    let storage = {};

    for (let line of input) {
        let elements = line.split(" ");
        let product = elements[0];
        let quantity = Number(elements[1]);

        if (storage.hasOwnProperty(product)) {
            storage[product] += quantity;
        } else {
            storage[product] = quantity;
        }
    }

    let entries = Object.entries(storage);

    for (const [key, value] of entries) {
        console.log(`${key} -> ${value}`);
        
    }
    
}

solve([ 
        'tomatoes 10', 
        'coffee 5', 
        'olives 100', 
        'coffee 40' 
    ]);
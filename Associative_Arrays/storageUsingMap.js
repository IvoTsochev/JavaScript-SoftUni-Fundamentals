function solve(input) {
    let mappedObject = new Map();

    for (let line of input) {
        let element = line.split(" ");
        let product = element[0];
        let quantity = Number(element[1]);

        console.log(mappedObject.get(product[quantity]));
        

        if (!mappedObject.has(product)) {
            mappedObject.set(product, quantity)
        } else {
            let currQuantity = mappedObject.get(product);
            let newQuantity = currQuantity + quantity;
            mappedObject.set(product, newQuantity);
        }
        
    }

    for (let [key, value] of mappedObject) {
        console.log(`${key} -> ${value}`);
    } 
}

solve([ 
        'tomatoes 10', 
        'coffee 5', 
        'olives 100', 
        'coffee 40' 
]);
function solve(currentStock, orderedStock) {
    let result = {};

    for (let i = 0; i < currentStock.length; i++) {
        if (i % 2 === 0) {
            result[currentStock[i]] = +currentStock[i + 1];
        }
    }
    for (let i = 0; i < orderedStock.length; i++) {
        if (i % 2 === 0) {
            if (result.hasOwnProperty(orderedStock[i])) {
                let key = orderedStock[i];
                let value = +orderedStock[i + 1];
                result[key] += value;
            }
            else {
                result[orderedStock[i]] = +orderedStock[i + 1];
            }
        }
    }
    Object.entries(result).map(x => console.log(`${x[0]} -> ${x[1]}`))
}



solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);
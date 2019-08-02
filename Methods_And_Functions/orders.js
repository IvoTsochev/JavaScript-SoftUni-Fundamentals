function orderPrice(product, quantity) {
    let coffeePrice = (a, b) => quantity * 1.5;
    let waterPrice = (a, b) => quantity * 1.00;
    let cokePrice = (a, b) => quantity * 1.40;
    let snacksPrice = (a, b) => quantity * 2.00;

    switch (product) {
        case "coffee":
            console.log(coffeePrice().toFixed(2));
            break;
        case "water":
            console.log(waterPrice().toFixed(2));
            break;
        case "coke":
            console.log(cokePrice().toFixed(2));
            break;
        case "snacks":
            console.log(snacksPrice().toFixed(2));
            break;
    }
}

orderPrice("water", 5);

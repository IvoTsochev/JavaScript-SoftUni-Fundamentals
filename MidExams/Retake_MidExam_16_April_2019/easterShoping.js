function solve(arr) {
    let shops = arr.shift().split(' ');
    let countOfCommand = +arr.shift();
    for (let i = 0; i < countOfCommand; i++) {
        let [command, shop, index] = arr[i].split(' ');

        switch (command) {
            case 'Include':
                shops.push(shop);
                break;
            case 'Visit':
                index = +index;
                if (index > shops.length) {
                    break;
                }
                if (shop == 'first') {
                    shops.splice(0, index)
                }
                else if (shop == 'last') {
                    shops.splice(shops.length - index, index);
                }
                break;
            case 'Prefer':
            index = +index;
            shop = +shop;
            let firstItem = shops[index];
            let secondItem = shops[shop]
                if ((index >= 0 && index < shops.length-1 )
                    && (shop >= 0 && shop < shops.length-1 )) {
                    shops.splice(shop, 1, firstItem);
                    shops.splice(index, 1, secondItem);
                }
                break;
            case 'Place':
            index = +index + 1;
                if (index > 0 && index < shops.length+1) {
                    shops.splice(index,0,shop)
                }
                break;
        }
    }
        console.log(`Shops left:\n${shops.join(' ')}`);
        
}

solve(['Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore',
    '5',
    'Include HM',
    'Visit first 2',
    'Visit last 1',
    'Prefer 3 1',
    'Place Library 2',
]);


solve(['Boutique Flowers CandyStore ThriftShop Versace Groceries ToyStore PeakStore',
    '6',
    'Visit first 9',
    'Visit last 4',
    'Prefer 3 8',
    'Prefer 0 1',
    'Place Store 7',
    'Place ShoeAquarium 2'])
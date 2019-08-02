function solve(input) {

    let totalSum = 0;

    console.log('Bought furniture:');
    input.forEach(line => {
        const pattern = />>(?<furniture>[A-Za-z]+)<<(?<price>[0-9]+[.]?[0-9]*)!(?<quantity>[\d]+)/gm;
        let result = pattern.exec(line);

        if (result) {
            console.log(result.groups.furniture);
            totalSum += (result.groups.price * result.groups.quantity);
        }
    });
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

solve([ '>>Sofa<<312.23!3', 
        '>>TV<<300!5', 
        '>Invalid<<!5', 
        'Purchase' ]);

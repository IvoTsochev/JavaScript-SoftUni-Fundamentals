function solve (arr) {

    let totalIncome = 0;
    arr.pop();

    arr.forEach((string) => {
        let pattern = /%([A-Z][a-z]+)%<([\w]+)>\|([0-9]+)\|([0-9]+\.?[0-9]*)\$/g;

        let result = pattern.exec(string)
        let currentSum = Number(result[3]) * Number(result[4]);
        totalIncome += currentSum;

        console.log(`${result[1]}: ${result[2]} - ${currentSum.toFixed(2)}`);
    });

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

solve(['%George%<Croissant>|2|10.3$',
        '%Peter%<Gum>|1|1.3$',
        '%Maria%<Cola>|1|2.4$',
        'end of shift']);
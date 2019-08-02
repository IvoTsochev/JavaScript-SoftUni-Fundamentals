function solve(arr) {
    let oddNumbers = 0;
    let evenNumbers = 0;
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenNumbers += Number(arr[i]);
        } else {
            oddNumbers += Number(arr[i]);
        }
    }
    // console.log(oddNumbers);
    // console.log(evenNumbers);
    
    total = evenNumbers - oddNumbers;
    console.log(total);
    
    
}

solve([`1`,`2`,`3`,`4`,`5`,`6`]);
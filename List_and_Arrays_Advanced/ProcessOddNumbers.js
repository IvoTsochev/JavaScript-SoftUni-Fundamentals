function oddNumbers(arr) {
    let orderedArr = arr.filter((element, index) => {
        return (index % 2 !== 0);
    });

    // console.log(orderedArr);
    
    // orderedArr = orderedArr.toString();
    
    let doubleNums = [];
    for (const element of orderedArr) {
        doubleNums.push(Number(element) * 2);
    }
    
    // console.log(doubleNums);

    doubleNums = doubleNums.reverse().toString().replace(/,/g, " ");
    console.log(doubleNums);


    
}

oddNumbers([3, 0, 10, 4, 7, 3]);
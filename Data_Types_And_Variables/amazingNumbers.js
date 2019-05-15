function amazingNumber(num) {
    let stringNum = num.toString();


    let sumOfNumbers = 0;

    for (let i = 0; i < stringNum.length; i++) {
        sumOfNumbers += Number(stringNum[i]);
    }


    if (sumOfNumbers.toString().includes("9")) {
        console.log(`${num} Amazing? True`);
    }
    else {
        console.log(`${num} Amazing? False`);
    }
}

amazingNumber(999);
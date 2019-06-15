function perfectNumberChecker(num) {
    let sumOfIntegers = 0;
    let halfNum = Number(num / 2);

    console.log(typeof num);
    
    
    for (let i = 1; i <= halfNum; i++) {
        console.log(halfNum[i]);
        if (num % halfNum[i] == 0) {
            sumOfIntegers += Number(halfNum[i]);
        }
    }

    if (sumOfIntegers == num) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
        
    }
}

perfectNumberChecker(6);
function solve(arr) {
    let newArr = arr.slice();
    let originalSum = 0;
    let newSum = 0;

    for (let nums of arr) {
        originalSum += nums;
    }

    for (let i = 0; i < newArr.length; i++) {
        let num = Number(newArr[i]);
        if (num % 2 == 0) {
            newArr[i] = newArr[i] + i;
        } else {
            newArr[i] = newArr[i] - i;
        }
        newSum += num;
    }


    console.log(newArr);
    console.log(newSum);
    console.log(originalSum); 
}

solve([5, 15, 23, 56, 35]);
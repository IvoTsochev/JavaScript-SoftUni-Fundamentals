function solve(arr) {
    let newArr = arr.slice();
    let arrSum = 0;
    let newArrSum = 0;
    //sum of the original array
    for (let i = 0; i < arr.length; i++) {
        arrSum += arr[i];
    }
    
    for (let index in newArr) {
        if (newArr[index] % 2 == 0) {
            newArr[index] += Number(index);
        } else if (newArr[index] % 2 != 0) {
            newArr[index] -= Number(index);
        }
    }
    //sum of the new array
    for (let i = 0; i < newArr.length; i++) {
        newArrSum += newArr[i];
    }


    console.log(newArr);
    
    console.log(arrSum);
    console.log(newArrSum);
    
}

solve([5,15,23,56,35]);
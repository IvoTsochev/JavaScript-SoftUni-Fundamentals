function solve(arr1, arr2) {
    let newArr = [];
    let counter = 0;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (i % 2 == 0 && j % 2 == 0) {
                let sumOfElements = Number(arr1[i]) + Number(arr2[j]);
                newArr.push(sumOfElements);
            } else if (i % 2 != 0 && j % 2 != 0) {
                let concatElements = arr1[i] + arr2[j];
                newArr.push(concatElements);
            }
            i++;
        }
    }
    console.log(newArr.join(" - "));
    
}

solve(["5", "15", "23", "56", "35"],
["17", "22", "87", "36", "11"]);
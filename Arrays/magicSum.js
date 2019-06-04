function solve(arr, num) {
    let newNum = num;
    let removeTheLastElement = arr.pop();
    newArr = arr.toString().split(" ");
    for (let index in newArr) {
        let shiftedElement = Number(newArr.shift());
        for (let i in newArr) {
            if (Number(shiftedElement) + Number(newArr[i]) == Number(newNum)) {
                console.log(`${shiftedElement} ${newArr[i]}`);
                
            }
        }
    }

}

solve(['1 7 6 2 19 23', '8']);
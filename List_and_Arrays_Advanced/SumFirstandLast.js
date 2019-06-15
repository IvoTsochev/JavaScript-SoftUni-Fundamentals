function solve(arr) {
    let firstElement = arr.shift();
    let lastElement = arr.pop();

    console.log(+firstElement + +lastElement);
    

}

solve(['20', '30', '40']);
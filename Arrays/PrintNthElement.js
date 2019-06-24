function solve(arr) {
    let theElement = +arr.pop();
    let newArr = [];

    for (let i = 0; i < arr.length; i+=theElement) {
        newArr.push(arr[i]);
    }

    console.log(newArr.join(" "));
    
    
}

solve(['5', '20', '31', '4', '20', '2']);
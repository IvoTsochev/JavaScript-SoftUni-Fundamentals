function solve(arr, rotations) {
    let poppedElement = 0;
    for (let i = 0; i < rotations; i++) {
        poppedElement = arr.shift();
        arr.push(poppedElement);
    }
    
    console.log(arr.join(" "));
    
    
}

solve([51, 47, 32, 61, 21],
    2);
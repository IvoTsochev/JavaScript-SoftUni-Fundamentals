function solve(arr) {
    let k = arr.shift();
    
    let firstHalf = arr.slice(0, k);
    let secondHalf = arr.slice(-k);

    
    console.log(firstHalf.join(" "));
    console.log(secondHalf.join(" "));
}

solve([3,
    6, 7, 8, 9]   
    );
function solve(input) {
    let distinctArr = [];

    for (let i = 0; i < input.length; i++) {
        let indexOfEl = input.indexOf(input[i]);
        
        if (i === indexOfEl) {
            distinctArr.push(input[i])
        }
    }

    console.log(distinctArr.join(" "));
    
}

solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);
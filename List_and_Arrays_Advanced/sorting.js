//първо сортираме по низходящо и полсе shift и pop
function solve(input) {
    let inputCopy = input.slice().sort((a, b) => b - a);
    console.log(inputCopy);
    let newArr = [];
    

    for (let i = 0; i < inputCopy.length; i++) {
        newArr += inputCopy.shift(inputCopy[i]) + " ";
        newArr += inputCopy.pop(inputCopy[i]) + " ";

        
    }
    

    newArr += inputCopy.shift() + " ";
    newArr += inputCopy.shift();
    
    
    console.log(newArr);
    
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

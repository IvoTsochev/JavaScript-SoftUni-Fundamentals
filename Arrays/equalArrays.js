function solve(arr1, arr2) {
    let sum = 0;
    arr1 = arr1.map(Number);
    arr2 = arr2.map(Number);
    let areIdentical = true;

    for (let i = 0; i < arr1.length; i++) {
        if(arr1[i] != arr2[i]) {
            areIdentical = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        } else {
            sum += arr1[i];
        }
    }

    if (areIdentical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
        
    }
}

solve(  ['1'], ['10'])
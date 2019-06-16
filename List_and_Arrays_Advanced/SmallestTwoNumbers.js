function smallestTwoNums(arr) {
    let workingArr = arr.slice();
    // console.log(workingArr);
    workingArr.sort((a, b) => {
        return a - b;
    });

    console.log(workingArr.slice(0, 2).toString().replace(/,/g, " "));
    
    
}

smallestTwoNums([30, 15, 50, 5]);
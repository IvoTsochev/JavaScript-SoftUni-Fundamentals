function sortedCart(arr) {
    let workingArr = arr.slice().sort();
    // console.log(workingArr);

    for (let i = 0; i < workingArr.length; i++) {
        console.log(`${i+1}.${workingArr[i]}`);
        
    }

}

sortedCart(["Potatoes", "Tomatoes", "Onions", "Apples"]);
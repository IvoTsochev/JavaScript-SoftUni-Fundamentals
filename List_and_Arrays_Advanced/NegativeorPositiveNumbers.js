function sortArray(strArr) {
    let newArray = [];

    for (let i = 0; i < strArr.length; i++) {
        let num = Number(strArr[i]);
        if (num < 0) {
            newArray.unshift(num);
        } else {
            newArray.push(num);
        }
    }

    for (const elements of newArray) {
        console.log(elements);
        
    }
    
}

sortArray([7, -2, 8, 9]);
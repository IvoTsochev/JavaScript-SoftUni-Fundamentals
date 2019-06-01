function solve(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) == true) {
            console.log(arr1[i]);
            
        }
    }
}

solve(["Hey", "hello", 2, 4, "Pesho", "e"], 
["Pecho", 10, "hey", 4, "hello", "2"]);
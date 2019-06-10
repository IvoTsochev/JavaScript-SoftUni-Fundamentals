function checkIfPalidrome(arr) {
    let arrToString = arr.toString().split(",");
    
    for (let i = 0; i < arrToString.length; i++) {
        let currentElement = arrToString[i].split("").reverse();
        // console.log(currentElement.reverse());
        
        let reversedCurrentElement = "";
        for (const index in currentElement) {
            reversedCurrentElement += currentElement[index]
        }
        console.log(reversedCurrentElement);
    }
    
}

checkIfPalidrome([123,323,421,121])
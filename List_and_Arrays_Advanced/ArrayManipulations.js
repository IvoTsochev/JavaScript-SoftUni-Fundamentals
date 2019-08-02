function manipulateArray(arr) {
    let mainArray = arr.shift().split(" ");

    for (let i = 0; i < arr.length; i++) {
        let splittedElement = arr[i].split(" ");
        let command = splittedElement[0];
        let element = splittedElement[1];
        let indexAt = splittedElement[2];
        // console.log(element);
        

        if (command == "Add") {
            mainArray.push(element);
        } else if (command == "Remove") {
            let index = mainArray.indexOf(element);
            if (index > -1) {
                mainArray.splice(index, 1);
            }
        } else if (command == "RemoveAt") {
            mainArray.splice(element, 1);
        } else if (command == "Insert") {
            // console.log(indexAt);
            mainArray.splice(indexAt, 0, element);
        }
        
    }

    console.log(mainArray.join(" "));
    
    
}

manipulateArray(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
);
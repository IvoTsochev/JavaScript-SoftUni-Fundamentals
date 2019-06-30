function solve(arr) {
    let totalContacts = arr.shift().split(" ");
    
    for (let i = 0; i < arr.length; i++) {
        let line  = arr[i].split(" ");
        let command = line[0];
        
        if (command === `Add`) {
            let name = line[1];
            let fuckinIndex = line[2];
            let indexOfName = totalContacts.indexOf(name);
            if (fuckinIndex >= 0 && fuckinIndex <= totalContacts.length) {
                if (indexOfName == -1) {
                    totalContacts.push(name);
                } else {
                    totalContacts.splice(fuckinIndex, 0, name);
                }
            }
        } else if (command === `Remove`) {
            let indexToRemove = line[1];
            if (indexToRemove >= 0 && indexToRemove <= totalContacts.length) {
                totalContacts.splice(indexToRemove, 1);
            }
        } else if (command === "Export") {
            let startingIndex = Number(line[1]);
            let endingIndex = Number(line[2]);
            
            if (endingIndex > totalContacts.length) {
                endingIndex = totalContacts.length;
            }
            //не е зададено да правим проверка на започващия индекс, но все пак
            if (startingIndex >= 0 && startingIndex <= totalContacts.length) {
                // endingIndex += 1;
                let exportedArray = totalContacts.slice(startingIndex, endingIndex)
                console.log(exportedArray.join(" "));
            }
        } else if (command = `Print`) {
            let printType = line[1];
            if (printType === `Normal`) {
                console.log(`Contacts: ${totalContacts.join(" ")}`);
            } else if (printType === `Reversed`) {
                let reversedContacts = totalContacts.reverse();
                console.log(`Contacts: ${reversedContacts.join(" ")}`);   
            }
        }
        
    }
}

solve([ 'Zayn Katy Ariana Avril Nick Mikolas',
'Remove 3',
'Add Jacob 0',
'Export 0 3',
'Export 3 8',
'Print Reversed' ]);
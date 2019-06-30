function solve(arr){
    let fuckinArr = arr.shift().split(" ").map(Number);

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i].split(" ");   
        let command = element[0];
        if (command === "End") {
            break;
        } else if (command === `Switch`) {
            let currentIndex = Number(element[1]);
            if (currentIndex >= 0 && currentIndex <= fuckinArr.length) {
                fuckinArr[currentIndex] *= (-1);
            }
        } else if (command === `Change`) {
            let currentIndex = Number(element[1]);
            let currentValue = Number(element[2]);
            if (currentIndex >= 0 && currentIndex <= fuckinArr.length) {
                fuckinArr[currentIndex] = currentValue;
            }
        } else if (command === `Sum`) {
            let whatToSum = element[1];
            if (whatToSum === `Negative`) {
                let negativeSum = 0;
                for (let num of fuckinArr) {
                    if (num < 0) {
                        negativeSum -= num;
                    }
                }
                console.log(negativeSum * (-1));
            } else if (whatToSum === `Positive`) {
                let positiveSum = 0;
                for (let num of fuckinArr) {
                    if (num > 0) {
                        positiveSum += num;
                    }
                }
                console.log(positiveSum);
            } else if (whatToSum === `All`) {
                let allSum = 0;
                for (let num of fuckinArr) {
                    allSum += num;
                }
                console.log(allSum);
        } 
            
        }
        
        
    }

    let allPositive = [];

    for (let num of fuckinArr) {
        if (num >= 0) {
            allPositive.push(num);
        }
    }

    console.log(allPositive.join(` `));
    
    
}

solve([ '1 2 3 4 5 4 3 2 1 0',
        'Switch -4',
        'Change 13 0',
        'Switch 0',
        'Sum All',
        'End' ]);
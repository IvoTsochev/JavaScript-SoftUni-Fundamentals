function solve(arr) {
    let numberOfPaintings = arr.shift().split(' ').map(Number);

    for (let i = 0; i < arr.length; i++) {
        let splited = arr[i].split(' ');
        let command = splited[0];
        switch (command) {
            case 'Change':
                let paintingNumber = Number(splited[1]);
                let indexOfpaintedNum = numberOfPaintings.indexOf(paintingNumber);
                let changedNumber = Number(splited[2]);

                if (numberOfPaintings.includes(paintingNumber)) {
                    numberOfPaintings.splice(indexOfpaintedNum, 1, changedNumber);
                }
                break;
            case 'Hide':
                let paintingNumber1 = Number(splited[1]);
                let indexOfpaintedNum1 = numberOfPaintings.indexOf(paintingNumber1);
                if (numberOfPaintings.includes(paintingNumber1)) {
                    numberOfPaintings.splice(indexOfpaintedNum1, 1);
                }
                break;
            case 'Switch':
                let paintNum = Number(splited[1]);
                let indexOfpaintNum = numberOfPaintings.indexOf(paintNum);
                let paintNum2= Number(splited[2]);
                let indexOfpaintNum2 = numberOfPaintings.indexOf(paintNum2);
                if (numberOfPaintings.includes(paintNum)
                    && numberOfPaintings.includes(paintNum2)) {
                    numberOfPaintings.splice(indexOfpaintNum, 1, paintNum2);
                    numberOfPaintings.splice(indexOfpaintNum2, 1, paintNum);
                }
                break;
            case 'Insert':
                let place = Number(splited[1]);
                let paintNumber = Number(splited[2]);
                if (numberOfPaintings.length >= place) {
                    numberOfPaintings.splice(place+1,0,paintNumber);
                }
                break;
            case 'Reverse':
                numberOfPaintings.reverse();
                break;
            case 'END':
                console.log(numberOfPaintings.join(' '));

                break;
        }
    }
}
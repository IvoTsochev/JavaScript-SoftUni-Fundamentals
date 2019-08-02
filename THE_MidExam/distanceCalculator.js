function fuckinDistance(arr) {
    let steps = Number(arr.shift());
    let stepLength = Number(arr.shift());
    let neededDistance = Number(arr.shift());

    let distanceTraveled = 0;

    let counter = 1;

    //calculating the distance in cm
    while (counter <= steps) {
        if (counter % 5 === 0) {
            distanceTraveled += stepLength * 0.7;
        } else {
            distanceTraveled += stepLength;
        }
        counter++
    }
    //distance in meters
    let distanceTraveledInMeteres = distanceTraveled / 100;

    //percentage of the needed distance
    let percentage = (distanceTraveledInMeteres / neededDistance) * 100;

    console.log(`You travelled ${percentage.toFixed(2)}% of the distance!`);
}


fuckinDistance([ 
                //steps made
                '5000', 
                //length of the step
                '7.5', 
                //needed distance in meters
                '500' ]);
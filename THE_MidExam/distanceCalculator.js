function fuckinDistance(arr) {
    let steps = Number(arr.shift());
    let stepLength = Number(arr.shift());
    let neededDistance = Number(arr.shift());

    let distanceTraveled = 0;

    let counter = 0;

    while (counter < steps) {
        if (counter % 5 === 0) {
            distanceTraveled += stepLength * 0.7;
        } else {
            distanceTraveled += stepLength;
        }
        counter++
    }

    let distanceTraveledInMeteres = distanceTraveled / 100;

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
function fuckinDistance(arr) {
    let steps = Number(arr.shift());
    let stepLength = Number(arr.shift());
    let neededDistance = Number(arr.shift());

    let distanceTraveled = 0;

    for (let i = 0; i < steps; i++) {
        if (i % 5 === 0) {
            distanceTraveled = distanceTraveled + (stepLength * 0.7);
        } else {
            distanceTraveled += stepLength;
        }
        
    }

    let percentage = (distanceTraveled * neededDistance) / 100;
    console.log(percentage / 100);
    

    console.log(distanceTraveled);
    
}



fuckinDistance([ 
                //steps made
                '5000', 
                //length of the step
                '7.5', 
                //needed distance in meters
                '500' ]);
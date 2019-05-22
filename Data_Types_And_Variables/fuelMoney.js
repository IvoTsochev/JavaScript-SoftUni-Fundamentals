function solve(distanceMustTravel, numOfPassangers, pricePerLiter) {
    let extraFuel = numOfPassangers * 0.1;
    let consumption = (distanceMustTravel / 100) * 7 + extraFuel;
    let priceOfTravel = consumption * pricePerLiter;

    console.log(`Needed money for that trip is ${priceOfTravel}lv.`);
    
}

solve(260, 9, 2.49);
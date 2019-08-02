function solve(a,b,c) {
    let semiParameter = (a+b+c)/2
    let triangleArea = (semiParameter * (semiParameter - a) * (semiParameter - b) * (semiParameter - c))**2;

    console.log(triangleArea);
    
}

solve(2,3.5,4);
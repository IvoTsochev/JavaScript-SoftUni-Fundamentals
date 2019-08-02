function solve(num) {
    let arrNum = num.toString().split("");
    let newArrSum = 0;
    
    for (let i = 0; i < arrNum.length; i++) {
        newArrSum += Number(arrNum[i]);
        
    }
    
    console.log(newArrSum);
    
}

solve(245678);
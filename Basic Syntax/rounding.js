function solve(number, round) {
    if (round > 15) {
        round = 15;
    }
 
    console.log(parseFloat(number.toFixed(round)))
}

solve(3.1812937812000,3)
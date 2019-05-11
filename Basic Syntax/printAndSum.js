function solve(start, end) {

    let list = [];
    let sum = 0;

    
    for (let i = start; i <= end; i++) {
        list = list + " " + i;
        sum += i;
    }
    console.log(list);
    console.log(`Sum: ${sum}`);

}

solve(5, 10)
function solve(num) {
    let years = num * 100;
    let days = years * 365.2422;
    days = parseInt(days);
    let hours = days * 24;
    let minutes = hours * 60;
    console.log(`${num} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
    
}

solve(1);
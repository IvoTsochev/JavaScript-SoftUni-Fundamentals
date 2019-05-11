function solve(num, group, day) {

    let totalSum = 0;

    if (day === "Friday" && group === "Students") {
        totalSum = num * 8.45;
        if (num >= 30 && group === "Students") {
            totalSum = totalSum - (totalSum * 0.15);
        }
    }
    else if (day === "Friday" && group === "Business") {
        totalSum = num * 10.90;
        if (num >= 100 && group === "Business") {
            totalSum = totalSum - (10 * 10.90);
        }
    }
    else if (day === "Friday" && group === "Regular") {
        totalSum = num * 15;
        if (num >= 10 && num <= 20) {
            totalSum = totalSum - (totalSum * 0.05);
        }
    }

    if (day === "Saturday" && group === "Students") {
        totalSum = num * 9.80;
        if (num >= 30 && group === "Students") {
            totalSum = totalSum - (totalSum * 0.15);
        }
    }
    else if (day === "Saturday" && group === "Business") {
        totalSum = num * 15.60;
        if (num >= 100 && group === "Business") {
            totalSum = totalSum - (10 * 15.60);
        }
    }
    else if (day === "Saturday" && group === "Regular") {
        totalSum = num * 20;
        if (num >= 10 && num <= 20) {
            totalSum = totalSum - (totalSum * 0.05);
        }
    }

    if (day === "Sunday" && group === "Students") {
        totalSum = num * 10.46;
        if (num >= 30 && group === "Students") {
            totalSum = totalSum - (totalSum * 0.15);
        }
    }
    else if (day === "Sunday" && group === "Business") {
        totalSum = num * 16;
        if (num >= 100 && group === "Business") {
            totalSum = totalSum - (10 * 16);
        }
    }
    else if (day === "Sunday" && group === "Regular") {
        totalSum = num * 22.50;
        if (num >= 10 && num <= 20) {
            totalSum = totalSum - (totalSum * 0.05);
        }
    }

    console.log(`Total price: ${totalSum.toFixed(2)}`);
}

solve(40, "Regular", "Saturday");
function solve(day, age) {
    if (day == "Weekday" && (age >= 0 && age <= 18)) {
        console.log("12$");
    }
    else if (day == "Weekday" && (age > 18 && age <= 64)) {
        console.log("18$");
    }
    else if (day == "Weekday" && (age > 64 && age <= 122)) {
        console.log("12$");
    }
    else if (day == "Weekend" && (age >= 0 && age <= 18)) {
        console.log("15$");
    }
    else if (day == "Weekend" && (age > 18 && age <= 64)) {
        console.log("20$");
    }
    else if (day == "Weekend" && (age > 64 && age <= 122)) {
        console.log("15$");
    }
    else if (day == "Holiday" && (age >= 0 && age <= 18)) {
        console.log("5$");
    }
    else if (day == "Holiday" && (age > 18 && age <= 64)) {
        console.log("12$");
    }
    else if (day == "Holiday" && (age > 64 && age <= 122)) {
        console.log("10$");
    }
    else {
        console.log("Error!")
    }
}

solve("Holiday", 15)
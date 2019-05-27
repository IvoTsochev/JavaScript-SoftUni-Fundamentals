function solve(num1, operator, num2) {
    let activity = 0;
    if (operator == "+") {
        activity = num1 + num2;
    } else if (operator == "-") {
        activity = num1 - num2;
    } else if (operator == "*") {
        activity = num1 * num2;
    } else if (operator == "/") {
        activity = num1 / num2;
    }
    console.log(activity.toFixed(2));
    
}

solve(5, "+", 10);
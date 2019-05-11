function triangleOfNumbers(num) {
    let sequence = "";

    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            sequence += i + " ";
        }
        console.log(sequence);
        sequence = "";
    }
}

triangleOfNumbers(5)
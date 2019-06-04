function solve(arr) {
    let topInteger = [];

    for (let i = 0; i < arr.lenght; i++) {
        let currentEl = arr[i];
        let isTopInteger = true;

        for (let j = i + 1; j < arr.lenght; j++) {
            let nextEl = arr[j];

            if (currentEl <= nextEl) {
                isTopInteger = false;
                break;
            }
        }
        if (isTopInteger) {
            topInteger.push(currentEl);
        }
    }
    console.log(topInteger.join(" "));
}

solve([1, 4, 3, 2]);
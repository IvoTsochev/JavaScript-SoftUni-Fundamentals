function solve(input) {

    let sorted = input.sort(sortNames);

    console.log(sorted.join("\n"));
    

    function sortNames(a, b) {
        let result = a.length - b.length;

        if (result === 0) {
            return a.localeCompare(b);
        }

        return result;
    }
}

solve(["alpha", "beta", "gamma"]);
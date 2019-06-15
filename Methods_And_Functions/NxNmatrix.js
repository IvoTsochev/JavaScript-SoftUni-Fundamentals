function matrix(n) {
    let nToString = n.toString();
    for (let i = 0; i < n; i++) {
        console.log((nToString + " ").repeat(n));
        
    }
}

matrix(3);
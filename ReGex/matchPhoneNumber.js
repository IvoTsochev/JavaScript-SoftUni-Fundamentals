function solve (input) {
    let text = input.toString();
    let pattern = /\+359(-| )2\1\d{3}\1\d{4}\b/g;
    // console.log(text);
    console.log(text.match(pattern).join(', '));
    
}

solve([ '+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222' ]);
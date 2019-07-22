function solve (input) {
    let text = input.toString();
    // console.log(text);
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let result = text.match(pattern);

    console.log(result.join(' '));
}


solve([ 'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov, Ivan Ivanov' ]);
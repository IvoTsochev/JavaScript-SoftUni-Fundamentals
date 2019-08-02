function loadingBar(num) {
    let total = 100;
    let dots = (total - num) / 10;
    let percentige = num / 10;
    let percSymbol = "%";
    let dotSymbol = ".";

    if (num < 100) {
        console.log(`${num}% [${percSymbol.repeat(percentige)}${dotSymbol.repeat(dots)}]`);
        console.log(`Still loading...`);    
    } else {
        console.log(`100% Complete!`);
        console.log(`[%%%%%%%%%%]`);
    }
}

loadingBar(50)
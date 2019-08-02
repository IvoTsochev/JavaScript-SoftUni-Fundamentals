function replace(firstString, charToReplace, matchWord) {
    let firstWord = firstString.replace("_", charToReplace);

    if (firstWord === matchWord) {
        console.log("Matched");
    }
    else {
        console.log("Not Matched");
    }
}


replace("Str_ng", "I", "Strong")
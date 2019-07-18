//60 - 100

function hashTag(input) {
    let text = input.split(' ');

    for (let word of text) {
        if (word.startsWith('#') && word.length > 1) {
            let specialWord = word.substring(1);
            console.log(specialWord);
        }
    }
}

hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
function splitter(input) {
    let splittedText = input.split(/(?=[A-Z])/).join(", ");

    return splittedText;
}

console.log(splitter('SplitMeIfYouCanHaHaYouCantOrYouCan')); 
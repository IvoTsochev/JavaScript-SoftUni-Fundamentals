function solve(input) {
    let lastIndex = input.lastIndexOf('\\') + 1;
    let text = input.substring(lastIndex);
    // console.log(text);
    let lastDot = text.lastIndexOf('.') + 1;
    let extension = text.substring(lastDot);
    // console.log(extension);
    let fileName = text.substring(0, lastDot - 1);
    // console.log(fileName);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);

}

solve('C:\\Internal\\training-internal\\Template.pptx');
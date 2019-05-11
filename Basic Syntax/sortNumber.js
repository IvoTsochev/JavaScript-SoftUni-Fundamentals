function sortNumbers(num1, num2, num3) {
    let listNum = [num1, num2, num3];

    listNum.sort()

    let reverseList = listNum.reverse()


    reverseList.forEach(element => {
        console.log(element);
    });

}

sortNumbers(0,0,2)
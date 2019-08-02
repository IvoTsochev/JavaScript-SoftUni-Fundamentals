function solve(num1, arr) {
  let newArr = arr.slice(0, num1);
  let reversedArr = newArr.reverse();
  // console.log(reversedArr);
  let result = 0;
  
  for (let i = 0; i < reversedArr.length; i++) {
    // console.log(reversedArr[i]);
    result += " " + reversedArr[i];
  }
  console.log(result.replace("0 ", ""));
}

solve(3, [10,20,30,40,50]);
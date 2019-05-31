function solve(arr) {
    let sumOfNumbers = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Number(arr[i]) % 2 == 0) {
        sumOfNumbers += Number(arr[i]);
      }
    }
    console.log(sumOfNumbers);
  }

  solve(['1','2','3','4','5','6']);
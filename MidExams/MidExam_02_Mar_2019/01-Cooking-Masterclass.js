function solve(arr) {
  let budget = +arr.shift();
  let studentsCount = +arr.shift();
  let flourPrice = +arr.shift();
  let eggPrice = +arr.shift();
  let apronPrice = +arr.shift();

  let allExpenses = apronPrice * (studentsCount + Math.ceil(studentsCount * 0.2)) + eggPrice * 10 *
      studentsCount + flourPrice * (studentsCount - (Math.floor(studentsCount / 5)));


  if (allExpenses <= budget) {
      console.log(`Items purchased for ${allExpenses.toFixed(2)}$.`);
  } else {
      console.log(`${(allExpenses - budget).toFixed(2)}$ more needed.`);
  }

}

solve([
      //budget
      '50',
      //students
      '2',
      //price for flour per package
      '1.0',
      //price for a egg
      '0.10',
      //price of apron
      '10.0' ])


function solve(arr) {
  let days = arr.shift();
  let budget = arr.shift();
  let groupPeople = arr.shift();
  let fuel = arr.shift();
  let food = arr.shift();
  let priceForRoom = arr.shift();
  let travelledDistance = 0;

  let recievedMoney = 0;
  let consumedFuel = 0;

  if (groupPeople > 10) {
      priceForRoom *= 0.75;
  }
  let foodExpenses = food * groupPeople * days;
  let priceHotelAllNights = priceForRoom * groupPeople * days;
  let currentExpenses = foodExpenses + priceHotelAllNights;
  for (let i = 1; i <= arr.length; i++) {
      travelledDistance = arr[i-1];
      consumedFuel = travelledDistance * fuel;
      currentExpenses += consumedFuel;
      if (i % 7 == 0) {
          recievedMoney = currentExpenses / groupPeople;
          currentExpenses -= recievedMoney;
      }
      else if (i % 5 == 0) {
          currentExpenses = currentExpenses + (currentExpenses * 0.4);
      }
      else if (i % 3 == 0) {
          currentExpenses = currentExpenses + (currentExpenses * 0.4);
      }
      if (currentExpenses > budget) {
          console.log(`Not enough money to continue the trip. You need ${(currentExpenses - budget).toFixed(2)}$ more.`);
          return;
      }
  }

  console.log(`You have reached the destination. You have ${(budget-currentExpenses).toFixed(2)}$ budget left.`);

}



// solve([7,
//     12000,
//     5,
//     1.5,
//     10,
//     20,
//     512,
//     318,
//     202,
//     154,
//     222,
//     108,
//     123
// ])

solve([10,
  20500,
  11,
  1.2,
  8,
  13,
  100,
  150,
  500,
  400,
  600,
  130,
  300,
  350,
  200,
  300])
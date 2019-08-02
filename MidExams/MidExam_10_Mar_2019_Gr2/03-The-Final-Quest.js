function solve(input) {
  let collectionOfWords = input.shift().split(' ');

  for (let i = 0; i < input.length; i++) {
      let splited = input[i].split(' ');
      let [command, value, anotherValue] = splited;

      switch (command) {
          case 'Delete':
              value = +value;
              if (value >= 0 && value < collectionOfWords.length - 1) {
                    collectionOfWords.splice(value + 1, 1);
              }
            
              break;
          case 'Swap':
              let indexOfFirstValue = collectionOfWords.indexOf(value);
              let indexOfSecondValue = collectionOfWords.indexOf(anotherValue);
              if (collectionOfWords.includes(value)
                  && collectionOfWords.includes(anotherValue)) {
                  collectionOfWords.splice(indexOfFirstValue, 1, anotherValue)
                  collectionOfWords.splice(indexOfSecondValue, 1, value)
              }
              break;
          case 'Put':
              anotherValue = +anotherValue
              if (anotherValue > 0 && 
                  anotherValue <= collectionOfWords.length +1) {
                  collectionOfWords.splice(anotherValue - 1, 0, value)
              }

              break;
          case 'Replace':
              let indexOfSecondWord = collectionOfWords.indexOf(anotherValue)
              if (collectionOfWords.includes(anotherValue)) {
                  collectionOfWords.splice(indexOfSecondWord, 1, value)
              }
              break;
              case 'Sort':
              collectionOfWords.sort((a,b) => b.localeCompare(a))
              break;
          case 'Stop':
              console.log(collectionOfWords.join(' '));

              break;
      }
  }
}
solve(['Congratulations! You last also through the have challenge!',
  'Swap have last',
  'Replace made have',
  'Delete 2',
  'Put it 4',
  'Stop'])

  // solve(['This the my quest! final',
  //     'Put is 2',
  //     'Swap final quest!',
  //     'Delete 2',
  //     'Stop']
  //     )
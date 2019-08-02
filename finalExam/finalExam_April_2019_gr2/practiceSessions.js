function practiceSessions(data) {
    let roadsList = {}; 
    let commandAndInfo = data.shift();
    while (commandAndInfo != 'END') {
        let [command, road, racer, nextRoad] = commandAndInfo.split('->');
       

        if (command == 'Add') {
            if (!roadsList.hasOwnProperty(road)) {
                roadsList[road] = [racer];
            } else {
                if ( !roadsList[road].includes(racer)) {
                    roadsList[road].push(racer);
                }
            }
        } else if (command === 'Move') {
            if (roadsList[road].includes(racer)) {
                let index = roadsList[road].indexOf(racer);
                roadsList[road].splice(index, 1);
                roadsList[nextRoad].push(racer);
            }
        } else if (command === 'Close') {
            if (roadsList.hasOwnProperty(road)) {
                delete roadsList[road];
            }
        }
        commandAndInfo = data.shift();
    }
   
   
      let sorted = Object.entries(roadsList)
                         .sort((a, b) => a[0].localeCompare(b[0]))
                         .sort((a, b) => b[1].length - a[1].length);
      console.log('Practice sessions:');
      sorted.forEach(e => {
          console.log(`${e[0]}`);
          e[1].forEach(e => console.log(`++${e}`));
      })
   
}
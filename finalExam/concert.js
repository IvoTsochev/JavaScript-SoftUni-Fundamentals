function manageConcert(arr) {
    let addMembers = {};
    let playTime = {};
    let totalTime = 0;
    let bandNameToPRint = arr.pop();
 
    for (let i = 0; i < arr.length; i++) {
        let currentLine = arr[i];
        if (currentLine === 'start of concert') {
            console.log(`Total time: ${totalTime}`);
 
            let sortedByTime = Object.entries(playTime)
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
 
            for (let band of sortedByTime) {
                let [bandName, time] = band;
 
                console.log(`${bandName} -> ${time}`);
            }
 
            console.log(bandNameToPRint);
 
            let allMembers = addMembers[bandNameToPRint];
 
            for (let mem of allMembers) {
                console.log(`=> ${mem}`);
            }
 
 
        } else {
            let [command, group, values] = currentLine.split('; ');
 
            if (command === 'Play') {
                let time = Number(values);
 
                if (!playTime.hasOwnProperty(group)) {
                    playTime[group] = 0;
                }
                playTime[group] += time;
                totalTime += time;
            } else if (command === 'Add') {
                let members = values.split(', ');
 
                if (!addMembers.hasOwnProperty(group)) {
                    addMembers[group] = [];
                }
 
 
                for (let member of members) {
 
                    if (!addMembers[group].includes(member)) {
                        addMembers[group].push(member);
                    }
 
                }
            }
 
 
 
        }
    }
}
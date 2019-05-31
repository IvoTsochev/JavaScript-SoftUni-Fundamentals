function solve(num) {
    let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    if (num > 7) {
      console.log("Invalid day!");
    } else {console.log(weekdays[num-1]);
      
    }
    
  }

  solve(1);